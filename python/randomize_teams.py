import json
import random
import os
import requests


# === CONFIGURATION ===
API_URL = "https://script.google.com/macros/s/AKfycbwvbNVA3QZVJk1gsQ69ZKdOKHkVtsthxa_4kvVgoULrhVutan6noejy_bPJDH0zjpppqA/exec"  # Replace!
SET_TEAMS_URL = f"{API_URL}/setTeams"  # optional, if you create a separate endpoint
GET_NAMES_URL = f"{API_URL}?names=1"  # adjust as needed
MAX_TEAM_MEMBERS = 5
MIN_TEAM_MEMBERS = 4
OUTPUT_JSON = os.path.join(os.getcwd(), "src/data/teams.json")


def fetch_names():
    """Fetch names from your Google Apps Script endpoint"""
    res = requests.get(GET_NAMES_URL)
    print("🔍 Raw response:", res.text)  # <-- Add this

    try:
        names = res.json()
    except Exception as e:
        print("❌ Failed to parse JSON:", e)
        raise

    if not isinstance(names, list):
        raise Exception("❌ Invalid response")
    print(f"📋 Fetched {len(names)} names")
    return names


def randomize_teams(names, max_team_members, min_team_members=3):
    """Randomize names into teams and redistribute members from smaller teams."""
    random.shuffle(names)
    teams = []
    team_number = 1

    for i in range(0, len(names), max_team_members):
        chunk = names[i : i + max_team_members]
        teams.append(
            {
                "team": f"Team {team_number}",
                "score": 0,
                "members": chunk,
            }
        )
        team_number += 1

    # Redistribute small final team
    while len(teams) > 1 and len(teams[-1]["members"]) < min_team_members:
        extra = teams.pop()["members"]
        for member in extra:
            for team in teams:
                if len(team["members"]) < max_team_members:
                    team["members"].append(member)
                    break

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
    save_to_file(teams)
    upload_to_google_apps_script(teams)


if __name__ == "__main__":
    main()
