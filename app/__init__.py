from flask import Flask

def create_app():
    app = Flask(__name__)

    # Importar las rutas desde routes.py
    from .routes import main

    app.register_blueprint(main)

    return app
