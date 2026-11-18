import urllib.request
import json
import re

repos = ['Olist-ECommerce', 'Healthcare', 'Supply-Chain', 'LUMERA-Campaign']

headers = {'User-Agent': 'Mozilla/5.0'}

for repo in repos:
    print(f"\n==================== {repo} ====================")
    # Get tree or contents
    url = f"https://api.github.com/repos/Ahmedx25/{repo}/contents"
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as resp:
            contents = json.loads(resp.read().decode())
            print("Files:")
            for item in contents:
                print(f"  - {item['name']} ({item['type']})")
                if item['name'].lower().endswith(('.png', '.jpg', '.jpeg', '.webp')):
                    print(f"    IMAGE: {item['download_url']}")
                if item['type'] == 'dir':
                    # Check inside directory
                    dir_url = item['url']
                    try:
                        dreq = urllib.request.Request(dir_url, headers=headers)
                        with urllib.request.urlopen(dreq) as dresp:
                            dir_items = json.loads(dresp.read().decode())
                            for ditem in dir_items:
                                print(f"    /{item['name']}/{ditem['name']}")
                                if ditem['name'].lower().endswith(('.png', '.jpg', '.jpeg', '.webp')):
                                    print(f"      IMAGE: {ditem['download_url']}")
                    except Exception as de:
                        print("    Dir error:", de)
    except Exception as e:
        print("Error getting contents:", e)

    # Get README
    readme_url = f"https://api.github.com/repos/Ahmedx25/{repo}/readme"
    try:
        rreq = urllib.request.Request(readme_url, headers=headers)
        with urllib.request.urlopen(rreq) as resp:
            rdata = json.loads(resp.read().decode())
            import base64
            readme_text = base64.b64decode(rdata['content']).decode('utf-8', errors='ignore')
            print("\nREADME Summary:")
            print(readme_text[:500])
            # find images in README
            imgs = re.findall(r'!\[.*?\]\((.*?)\)', readme_text)
            imgs_html = re.findall(r'<img.*?src=[\'"](.*?)[\'"]', readme_text)
            all_imgs = imgs + imgs_html
            if all_imgs:
                print("Images referenced in README:")
                for img in all_imgs:
                    print(f"  * {img}")
    except Exception as e:
        print("Error getting readme:", e)
