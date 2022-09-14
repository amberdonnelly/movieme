# movieme

A movie tracker and suggester.

Built by [Amber](https://github.com/amberdonnelly) and [Alex](https://github.com/AlexHawkes) ❤️

## getting started

### locally

Setup your python env. (You only need to do this part once.)
```
sudo apt update
sudo apt install python3-pip
pip3 --version

vi ~/.bashrc
# set alias for pip in bashrc
	alias pip=pip3
# exit with esc + :wq

sudo apt install python3-venv

# create a virtual env
virtualenv venv
source venv/bin/activate

# install the requirements
cd api/
pip install -r api/requirements.txt
```

Set up your node env. (You only need to do this part once as well.)
```
# install node
sudo apt install nodejs
sudo apt install npm

# install the requirements
npm i
```

Then run the app! You'll need 2 console tab open.
```
# in one console start the frontend
cd movieme/
npm start

# and in the other start the backend
cd movieme/
source venv/bin/activate
cd api/
flask run --no-debugger
```

You'll be able to view the app at [http://localhost:3000](http://localhost:3000).

Remember to make sure you're up to date with the remote before making changes.
```
git fetch
git pull
```

Steps to commit your changes:
```
# see what files you've edited
git status

# add the files you want to commit
# if you want to add all files you can type "git add ."
git add <list the files you want to add, separated by spaces>

# check the files you want to commit are in green
git status

# write a commit message
git commit -m "<your commit message>"

# push the changes
git push
```

## other references

- Bootstrapped with [Create React App](https://github.com/facebook/create-react-app)
- [How to Create a React + Flask Project](https://blog.miguelgrinberg.com/post/how-to-create-a-react--flask-project)
- [How to Dockerize a React + Flask Project](https://blog.miguelgrinberg.com/post/how-to-dockerize-a-react-flask-project)
