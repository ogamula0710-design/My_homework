import json


with open ('HW9 GET Lists.json', 'r', encoding="utf-8") as Lists:
    data = json.load(Lists)

for lst in data["lists"]:
    print("ID:", lst["id"], "Name:", lst["name"])
