این کد پایین عالیه برای گرفتن تمام دیتای موجود این API 
بعدش باید یه کدی بنویسم که اطلاعات خوب این raw فایل رو مستقیما از api بگیره 
که اطلاعات اضافی مداشته باشم
اینجوری هم کامل خواهد بود هم سبک.
بعد فایل رو توی json داده انتی بیوتیک ها منتقل میکنم که روی وب اپ خونده بشن


import requests
import json
import time

antibiotics = [
    "Penicillin G", "Amoxicillin", "Ciprofloxacin", "Tetracycline",
    "Vancomycin", "Erythromycin", "Doxycycline", "Clindamycin",
    "Gentamicin", "Metronidazole"
]

def get_cid(name):
    url = f"https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/{name}/cids/JSON"
    r = requests.get(url)
    if r.status_code == 200:
        return r.json().get("IdentifierList", {}).get("CID", [None])[0]
    return None

def get_full_record(cid):
    url = f"https://pubchem.ncbi.nlm.nih.gov/rest/pug_view/data/compound/{cid}/JSON"
    r = requests.get(url)
    if r.status_code == 200:
        return r.json()
    return None

raw_data = {}

for name in antibiotics:
    print(f"Processing: {name}")
    cid = get_cid(name)
    if not cid:
        print(f"  ❌ No CID found for {name}")
        continue

    record = get_full_record(cid)
    if record:
        raw_data[name] = record
    else:
        print(f"  ⚠️ No data found for CID {cid}")
    
    time.sleep(1)

with open("raw_data.json", "w") as f:
    json.dump(raw_data, f, indent=2)

print("✅ فایل raw_data.json ساخته شد.")

