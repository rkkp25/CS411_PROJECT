# CS411_PROJECT

## Team 42 Members: Kris Peters, Ashton Fox, Valentina Haddad, Mithat Kus
Kris: rkkp@bu.edu
Ashton: ashfox@bu.edu
Valentina: vhaddad@bu.edu
Mithat: mthtks@bu.edu

## Notes

Branches: 
* ashton
* valentina
* kris
* mithat

### before you start working, GIT PULL into your branch to get all the latest changes

## Git commands
to view all your local branches:
```
git branch
```
to view ALL branches including remote:
```
git branch -a"
```
### Pulling from remote repo
to pull from github/origin into your branch/local, make sure you're in the branch you want to pull into and run:
```
git pull
```
pushing a branch for the first time:
```
git push -u origin <branch_name>
```
error during git pull: you have divergent branches and need to specify how to reconcile them, use command:
```
git config pull.rebase false
```
when in branch X and you do
```
git merge Y
```
you pull the changes from that branchY into branch X
* after merging, you typically want to delete YOUR branch:
to delete a branch:
```
git branch -d <branch_name>
```
to delete a branch remotely:
```
git push --delete -d <branch_name>
```
you may also do this on github.com when you merge your branch to the main branch - it asks if you want to delete your branch

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

### =====


to run the project and display the webpage, cd into the src/ file, and type in the command line:
```
npm run dev
```
