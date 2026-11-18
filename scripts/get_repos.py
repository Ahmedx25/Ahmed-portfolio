import urllib.request
import json

req = urllib.request.Request('https://api.github.com/users/Ahmedx25/repos?per_page=100', headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req) as response:
        repos = json.loads(response.read().decode())
        print(f"Total repos: {len(repos)}")
        for r in repos:
            print(f"- {r['name']}: {r.get('description')} ({r['html_url']})")
except Exception as e:
    print('Error:', e)
