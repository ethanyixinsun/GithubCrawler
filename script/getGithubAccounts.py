from pymongo import MongoClient
import requests
from github import Github


client = MongoClient(
    "mongodb+srv://yixinsun:19990802@githubcrawler.jxo2wfn.mongodb.net/test"
)
db = client.get_default_database()
db.github_accounts.create_index("username", unique = True)


def store_user_data(username):
    user_url = f"https://api.github.com/users/{username}"
    user_data = requests.get(user_url).json()
    github_name = user_data["name"]

    github = Github()
    user = github.get_user(username)
    repo_list = []
    for repo in user.get_repos():
        repo_list.append(
            {
                "name": repo.full_name,
                "description": repo.description,
                "language": repo.language,
                "stars": repo.stargazers_count,
            }
        )

    user_data_sliced = {"username": username, "name": github_name, "repos": repo_list}
    print(user_data_sliced)

    db.github_accounts.insert_one(user_data_sliced)


file = open("./script/usernames.txt", 'r')
for line in file: 
    store_user_data(line.strip()) 