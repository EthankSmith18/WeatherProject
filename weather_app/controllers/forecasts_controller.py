from flask import Flask, render_template, redirect, request
from weather_app import app


#--------------Show Forecasts Page--------
@app.route("/forecast")
def generate_forecast():

    return render_template("forecast.html")

# @app.route("/search")
# def search():
#     location_zip = request.form
#     return redirect("/forecast", location_zip = location_zip)