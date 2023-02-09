from weather_app import app
from weather_app.controllers import users_controller
from weather_app.controllers import forecasts_controller



if __name__=="__main__":
    app.run(debug=True) 