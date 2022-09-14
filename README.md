# movieme

A movie tracker and suggester.

Built by [Amber](https://github.com/amberdonnelly) and [Alex](https://github.com/AlexHawkes) ❤️

## getting started

### locally

Setup your python env.
```
sudo apt update
sudo apt install python3-pip
pip3 --version

vi ~/.bashrc
# set alias for pip in bashrc
	alias pip=pip3
# exit with esc + :wq

sudo apt install python3.8-venv

# create a virtual env
virtualenv venv
source venv/bin/activate
```

Then install all the requirements.
```
pip install -r api/requirements.txt
npm i
```

You'll need 2 console tabs to run the app.
```
# start the frontend
npm start

# start the backend
cd api/
flask run --no-debugger
```

You'll be able to view the app at [http://localhost:3000](http://localhost:3000).

## other references

- Bootstrapped with [Create React App](https://github.com/facebook/create-react-app)
- [How to Create a React + Flask Project](https://blog.miguelgrinberg.com/post/how-to-create-a-react--flask-project)
- [How to Dockerize a React + Flask Project](https://blog.miguelgrinberg.com/post/how-to-dockerize-a-react-flask-project)
