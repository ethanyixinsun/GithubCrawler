from pymongo import MongoClient
import requests
from github import Github


client = MongoClient(
    "mongodb+srv://yixinsun:19990802@githubcrawler.jxo2wfn.mongodb.net/test"
)
db = client.get_default_database()
db.user_info.create_index("username", unique=True)
db.repository.create_index("name", unique=True)


def store_user_data(username):
    user_url = f"https://api.github.com/users/{username}"
    user_data = requests.get(user_url).json()
    github_name = user_data["name"]
    user_data_sliced = {"username": username, "name": github_name}
    db.user_info.insert_one(user_data_sliced)

    github = Github()
    user = github.get_user(username)
    for repo in user.get_repos():
        repo_sliced = {
            "name": repo.full_name,
            "username": username,
            "description": repo.description,
            "language": repo.language,
            "stars": repo.stargazers_count,
        }
        db.repository.insert_one(repo_sliced)


file = open("./script/usernames.txt", "r")
for line in file:
    store_user_data(line.strip())
