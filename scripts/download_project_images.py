import urllib.request
import os

os.makedirs('public/assets', exist_ok=True)

downloads = [
    # LUMERA Campaign
    ('https://github.com/user-attachments/assets/ac1f35bb-6671-404a-b6a8-31852002c330', 'public/assets/lumera_executive.png'),
    ('https://github.com/user-attachments/assets/d4dc3968-a83f-4d2b-90db-959563cb6b9d', 'public/assets/lumera_marketing.png'),
    # Healthcare
    ('https://raw.githubusercontent.com/Ahmedx25/Healthcare/main/executive.png', 'public/assets/healthcare_executive.png'),
    ('https://raw.githubusercontent.com/Ahmedx25/Healthcare/main/admissions.png', 'public/assets/healthcare_admissions.png'),
    # Olist E-Commerce
    ('https://raw.githubusercontent.com/Ahmedx25/Olist-ECommerce/main/Screenshot%202026-06-19%20010606.png', 'public/assets/olist_ecommerce_1.png'),
    ('https://raw.githubusercontent.com/Ahmedx25/Olist-ECommerce/main/Screenshot%202026-06-19%20010657.png', 'public/assets/olist_ecommerce_2.png'),
    # Supply Chain
    ('https://raw.githubusercontent.com/Ahmedx25/Supply-Chain/main/dashboard.png', 'public/assets/supply_chain_dashboard.png'),
]

headers = {'User-Agent': 'Mozilla/5.0'}

for url, target in downloads:
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as resp, open(target, 'wb') as out:
            out.write(resp.read())
        print(f"Downloaded {target} ({os.path.getsize(target)} bytes)")
    except Exception as e:
        print(f"Failed {url}: {e}")
