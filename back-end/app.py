from flask import Flask
from flask_restful import Resource, Api, abort
from pymongo import MongoClient
from bson.json_util import dumps


app = Flask(__name__)
api = Api(app)

app.db = MongoClient(
    "mongodb+srv://yixinsun:19990802@githubcrawler.jxo2wfn.mongodb.net/test"
).get_default_database()


def abort_if_username_doesnot_exist(username):
    if not app.db.user_info.count_documents({"username": username}, limit=1):
        abort(404, message="User {} doesn't exist".format(username))


class UserList(Resource):
    def get(self):
        user_list_cursor = app.db.user_info.find()
        user_list = dumps(list(user_list_cursor))
        print(user_list)
        return user_list


class User(Resource):
    def get(self, username):
        abort_if_username_doesnot_exist(username)
        user_cursor = app.db.user_info.find_one({"username": username})
        user = dumps(user_cursor)
        print(user)
        return user

    def delete(self, username):
        abort_if_username_doesnot_exist(username)
        app.db.user_info.delete_one({"username": username})
        return "", 204
    

class RepositoryList(Resource):
    def get(self, username):
        abort_if_username_doesnot_exist(username)
        repo_list_cursor = app.db.repository.find({"username": username})
        repo_list = dumps(list(repo_list_cursor))
        print(repo_list)
        return repo_list


api.add_resource(UserList, "/users")
api.add_resource(User, "/users/<username>")
api.add_resource(RepositoryList, "/repos/user/<username>")


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=True)
