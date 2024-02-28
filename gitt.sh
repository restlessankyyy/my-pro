git init
git status
git add .
git commit -m "My first commit" 
git status
echo -n "Enter remote URL"
echo -n
read https://github.com/restlessankyyy/myWebsite.git
git remote add origin $url
git push -f origin master
