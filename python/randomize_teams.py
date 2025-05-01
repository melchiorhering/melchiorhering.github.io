"""
This script randomizes a list of names into teams and saves the result to a JSON file.

Usage:
```python
uv run --no-project python/randomize_teams.py
```
"""

import json
import random
import os  # Added to get the current working directory


# Function to randomize teams
def randomize_teams(names, max_team_members):
    random.shuffle(names)
    teams = []
    team_number = 1

    for i in range(0, len(names), max_team_members):
        team_members = names[i : i + max_team_members]
        team = {
            "team": f"Team {team_number}",
            "score": 0,  # Random score for each team
            "members": team_members,
        }
        teams.append(team)
        team_number += 1

    return teams


# Input: List of names and max team members
names = [
    "Jessie",
    "James",
    "N",
    "Ghetsis",
    "Jacob",
    "Bente",
    "Ash",
    "Misty",
    "Brock",
    "Gary",
]
max_team_members = 5

# Generate teams
teams = randomize_teams(names, max_team_members)

# Output to JSON file
output_file = os.path.join(os.getcwd(), "teams.json")  # Dynamically get the PWD
with open(output_file, "w") as file:
    json.dump(teams, file, indent=4)

print(f"Teams have been randomized and saved to {output_file}")
