from flask import Flask, render_template, request, redirect, session, flash
from flask_bcrypt import Bcrypt
from weather_app import app
bcrypt = Bcrypt(app)
from weather_app.models.users_model import User

#-----------------Route to login page-------------------------------
@app.route("/")
def login_main():
    return render_template("login.html")

#-----------------Route to registration page-------------------------------
@app.route("/register")
def register():
    return render_template("registration.html")

#---Route that validates Registration fields, checks for email dup, hashes password, registers user-----------------------
@app.route("/registration", methods=["POST"])
def registration_validaton():

    if not User.validate_form(request.form):
        return redirect('/register')
    
    if not User.unique_email(request.form):
        return redirect("/register")

    hash = bcrypt.generate_password_hash(request.form["password"])
    

    data = {
        **request.form,
        "password" : hash
    }
    
    print(data)
    User.register(data)
    return redirect("/")

# #------Checks to see if user in session before accessing update profile, sends user info to page----------
# @app.route("/profile")
# def profile():
#     if not "user_id" in session:
#         flash("ACCESS DENIED. User not logged in.", "session")  
#         return redirect("/")
#     current_user = User.create_current_user()
#     return render_template("profile.html", current_user=current_user)

# #---Route that validates Update Profile fields, checks for email dup, hashes password, registers user-----------------------
# @app.route("/update_profile", methods=["POST"])
# def update_validaton():

#     if not User.validate_form(request.form):
#         return redirect('/profile')
    
#     if not User.unique_email(request.form):
#         return redirect("/profile")

    
#     print(data)
#     User.register(data)
#     return redirect("/")

#----Check login credentials, creates user session, displays location page or redirects to login page--------
@app.route("/login", methods=["POST"])
def login():

    user_login = User.validate_login(request.form)
    if not user_login:
        return redirect("/")
    session['user_id'] = user_login.id
    return redirect("/location")

#------Checks to see if user in session before accessing location page----------
@app.route("/location")
def location():
    if not "user_id" in session:
        flash("ACCESS DENIED. User not logged in.", "session")  
        return redirect("/")
    current_user = User.create_current_user()
    return render_template("location.html", current_user=current_user)

#------Clears user from session-----------
@app.route("/logout")
def logout():
    session.clear()
    return redirect("/")

