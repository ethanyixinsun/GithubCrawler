from flask import Flask
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)

class HelloWorld(Resource):
    def get(self):
        return {'content': 'hello world'}
api.add_resource(HelloWorld, '/api')


if __name__ == '__main__':
    app.run(debug=True)