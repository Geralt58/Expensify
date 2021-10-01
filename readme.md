#Git commands

git init - create a new git repo
git status -view the changes to your project code
git add - add files to staging area
git commit - Creates a new commit to file from staging area
git log - view recent commits

git init
git add .
git status
git commit -m "Initial Commit"
git add src/app.js
git commit -m "remove dummy expense data"
git log
ls -a ~/.ssh
git push -u origin master
git commit -am "message"

#heroku commands

heroku login
heroku create geralt58-expensify
git remote -v
git add and push
git push heroku master

heroku config  //show all vairables
heroku config:set KEY=value
heroku config:unset KEY