# CS411_PROJECT

## Team 42 Members: Kris Peters, Ashton Fox, Valentina Haddad, Mithat Kus
Kris: rkkp@bu.edu
Ashton: ashfox@bu.edu
Valentina: vhaddad@bu.edu
Mithat: mthtks@bu.edu

## LINK TO PROJECT VIDEO: https://drive.google.com/file/d/1Um8gNv1fhF6LbilwcDhUsGCHGXmO1-nl/view?usp=sharing 

## Notes

# before you start working, GIT PULL into your branch to get all the latest changes

## Git commands
to create a new branch:
```
git checkout -b <branch_name>
```
* normally when creating a branch, you name it whatever feature you are trying to implement, like "adding_buttons" or "fixing_bug", not just our names
* thats why when you finish pushing that branch to github, you delete it after, since you finished working on that feature
* this isn't necessary, but good to help keep things organized and practice for irl work  

to view all your local branches:
```
git branch
```
to view ALL branches including remote:
```
git branch -a
```
### Pulling from remote repo
to pull from github/origin into your branch/local, make sure you're in the branch you want to pull into (probably just main) and run:
```
git pull
```
error during git pull: you have divergent branches and need to specify how to reconcile them, use command:
```
git config pull.rebase false
```
error: the current branch has no upstream - you're pushing a branch for the first time:
```
git push -u origin <branch_name>
```
when in branch X and you do
```
git merge Y
```
you pull the changes from that branchY into branch X
* after merging, you typically want to delete YOUR branch:
you may also do this on github.com when you merge your branch to the main branch - it asks if you want to delete your branch - DELETE IT, then remove the branch locally:  
to delete a branch:
```
git branch -d <branch_name>
```
after that, you want to delete it remotely  
to delete a branch remotely:
```
git push --delete -d <branch_name>
```
and then prune so that the local knows that the branch isn't on the server anymore (because you did the delete remote):
```
git remote prune origin
```
the prune isn't necessary, but it keeps things organized so you don't get confused  

how to add your changes from YOUR branch to the main branch:
1. from your branch, push your changes to the repo
2. go onto GitHub and there should be a button to view the changes ("pull request")
3. check changes and approve push
4. everything should be updated in main for everyone to pull from

## Solving Conflicts
1. when you push, if there are remote changes, you'll need to git pull first
2. then you need to merge those changes with yours
if the change is on the same line in the same file, then it is a conflict, and you need to edit and resolve it
```
text
text
<<<<<<< HEAD
your changes
=======
somebody else's changes
>>>>>>> 42847283478789yfhuafaf8374927432324 (this is the commit hash from somebody else's changes)
text
text
```
you want to edit the file accordingly, and remove the <<<< HEAD, =====, and <<<<< hash # (those 3 lines). then, add/commit/push that file. 
otherwise, if the changes are on different lines, you just have to save and exit from the commit message file (the commit message is written for you) then, push that file (it has already been added and commited)

## Running the website

to run the project and display the webpage, cd into the src/ file, and type in the command line:
```
npm run dev
```
