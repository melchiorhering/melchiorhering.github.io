"""
This script randomizes a list of names into teams and saves the result to a JSON file.

Usage:
```python
uv run --no-project python/randomize_teams.py
```
"""

import json
import random
import os


def randomize_teams(names, max_team_members, min_team_members=3):
    """Randomize names into teams and redistribute members from smaller teams."""
    random.shuffle(names)
    teams = []
    team_number = 1

    # Create initial teams
    for i in range(0, len(names), max_team_members):
        team_members = names[i : i + max_team_members]
        team = {
            "team": f"Team {team_number}",
            "score": 0,
            "members": team_members,
        }
        teams.append(team)
        team_number += 1

    # Redistribute members from smaller teams to ensure all names are placed
    while len(teams[-1]["members"]) < min_team_members and len(teams) > 1:
        last_team = teams.pop()
        for member in last_team["members"]:
            for team in teams:
                if len(team["members"]) < max_team_members:
                    team["members"].append(member)
                    break

    return teams


def save_teams_to_file(teams, output_path):
    """Save the teams to a JSON file."""
    with open(output_path, "w") as file:
        json.dump(teams, file, indent=4)
    print(f"Teams have been randomized and saved to {output_path}")


def main():
    """Main function to randomize teams and save to a file."""
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
        "ben",
        "May",
        "Dawn",
        "Serena",
        "Cynthia",
        "Professor Oak",
        "Professor Sycamore",
        "Professor Kukui",
        "Professor Elm",
        "Professor Rowan",
        "Professor Birch",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
    ]
    max_team_members = 5
    min_team_members = 4  # Minimum members per team

    # Generate teams
    teams = randomize_teams(names, max_team_members, min_team_members)

    # Output to JSON file
    output_file = os.path.join(os.getcwd(), "src/data/teams.json")
    save_teams_to_file(teams, output_file)


if __name__ == "__main__":
    main()
