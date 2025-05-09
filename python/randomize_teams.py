import json
from pathlib import Path
import random
import requests

# === CONFIGURATION ===
API_URL = "https://script.google.com/macros/s/AKfycbzgf8t0TL3TNrRm9sNHium6vtXW0IyRu_dld34fvnS5URTYv3iUW4BUdSfB-ceogLXgug/exec"  # Replace!
SET_TEAMS_URL = f"{API_URL}/setTeams"  # optional
GET_NAMES_URL = f"{API_URL}?names=1"  # adjust as needed
MAX_TEAM_MEMBERS = 5
MIN_TEAM_MEMBERS = 4
OUTPUT_JSON = Path("../src/data/teams.json")

# Players who want to be together in the same team
GROUPS_TOGETHER = [
    ["Paul", "CR7 Tate Mendel"],
    [
        "Severijn de beste broer van 5",
        "Isis Koimans",
        "Soesja",
        "Uma Koimans",
        "Priscilla",
    ],
    ["Lucie", "Renske", "Klaas", "Martijn", "Minke"],
    ["Sophie Sander", "Emma"],
    ["Pieter", "Je oude moeder", "Daan", "Rutger", "Stijn"],
]


def fetch_names():
    """Fetch names from your Google Apps Script endpoint"""
    res = requests.get(GET_NAMES_URL)
    print("🔍 Raw response:", res.text)

    try:
        names = res.json()
    except Exception as e:
        print("❌ Failed to parse JSON:", e)
        raise

    if not isinstance(names, list):
        raise Exception("❌ Invalid response")

    print(f"📋 Fetched {len(names)} names")
    return names


def validate_groups(names):
    """Ensure all group members exist in the names list"""
    name_set = set(names)
    for group in GROUPS_TOGETHER:
        for name in group:
            if name not in name_set:
                print(
                    f"⚠️ Warning: '{name}' from group {group} not found in fetched names"
                )


def randomize_teams(names, max_team_members, min_team_members=3):
    validate_groups(names)

    # Split names into grouped and remaining
    grouped_names = set(n for group in GROUPS_TOGETHER for n in group)
    remaining_names = [n for n in names if n not in grouped_names]
    random.shuffle(remaining_names)

    teams = []

    # Add grouped teams
    for group in GROUPS_TOGETHER:
        if len(group) > max_team_members:
            raise ValueError(
                f"Group {group} exceeds max team size ({max_team_members})"
            )

        teams.append({"team": "", "score": 0, "members": list(group)})

    # Add remaining names as individual teams
    for i in range(0, len(remaining_names), max_team_members):
        chunk = remaining_names[i : i + max_team_members]
        teams.append({"team": "", "score": 0, "members": chunk})

    # Gather teams that are too small
    small_teams = [t for t in teams if len(t["members"]) < min_team_members]
    teams = [t for t in teams if len(t["members"]) >= min_team_members]

    # Redistribute small team members
    leftovers = [m for t in small_teams for m in t["members"]]
    for member in leftovers:
        for team in teams:
            if len(team["members"]) < max_team_members:
                team["members"].append(member)
                break
        else:
            # If all teams are full, start a new team
            teams.append({"team": "", "score": 0, "members": [member]})

    # ✅ Reassign clean team numbers
    for i, team in enumerate(teams, start=1):
        team["team"] = f"Team {i}"

    return teams


def save_to_file(teams, path="src/data/teams.json"):
    with open(path, "w") as f:
        json.dump(teams, f, indent=4)
    print(f"💾 Saved teams to {path}")


def upload_to_google_apps_script(teams):
    response = requests.post(API_URL, json=teams)
    print("🚀 Upload response:", response.text)
    response.raise_for_status()


def main():
    names = fetch_names()
    if not names:
        print("⚠️ No names found in the sheet. Aborting.")
        return

    teams = randomize_teams(
        names, max_team_members=MAX_TEAM_MEMBERS, min_team_members=MIN_TEAM_MEMBERS
    )
    save_to_file(teams, OUTPUT_JSON)
    # upload_to_google_apps_script(teams)


if __name__ == "__main__":
    # main()
    upload_to_google_apps_script(
        [
            {
                "team": "Team 1",
                "score": 0,
                "members": [
                    "Severijn de beste broer van 5",
                    "Isis Koimans",
                    "Soesja",
                    "Uma Koimans",
                    "Priscilla",
                ],
            },
            {
                "team": "Team 2",
                "score": 0,
                "members": ["Lucie", "Renske", "Klaas", "Martijn", "Minke"],
            },
            {
                "team": "Team 3",
                "score": 0,
                "members": ["Pieter", "Je oude moeder", "Daan", "Rutger", "Stijn"],
            },
            {
                "team": "Team 4",
                "score": 0,
                "members": [
                    "Willem",
                    "Felix",
                    "Geheimpje",
                    "Lute Wilhelm",
                    "Sanne!!!!!",
                ],
            },
            {
                "team": "Team 5",
                "score": 0,
                "members": [
                    "Mr Ape",
                    "Wie dit leest trekt een bak",
                    "Saartje",
                    "Lucas",
                    "Wutru Frijdal",
                ],
            },
            {
                "team": "Team 6",
                "score": 0,
                "members": ["Noortje", "Julius", "Maarten", "Stellie", "Ties"],
            },
            {
                "team": "Team 7",
                "score": 0,
                "members": [
                    "Dafit",
                    "Lotte van Nieuwland",
                    "Monse Dekker",
                    "Noah",
                    "Lou de Ledge",
                ],
            },
            {
                "team": "Team 8",
                "score": 0,
                "members": ["Bibi", "Bart Vos", "Janne", "Thijs Hoffman", "Roland"],
            },
            {
                "team": "Team 9",
                "score": 0,
                "members": ["guigne", "Puk", "Jan(neke)", "Misses frumz", "Puck"],
            },
            {
                "team": "Team 10",
                "score": 0,
                "members": ["Paul", "CR7 Tate Mendel", "Sophie Sander", "Emma", "Faye"],
            },
        ]
    )
