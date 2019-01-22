# Git Cheatsheet

- [Branches](#branches)
    - [Create New Branches](#create-new-branches)
    - [Get Remote Branches](#get-remote-branches)
    - [Checkout Previous Branch](#checkout-previous-branch)
    - [Rename Branch](#rename-branch)
    - [Rename Remote Branch](#rename-remote-branch)
    - [Delete Local Remote-Tracking Branches](#delete-local-remote-tracking-branches)
    - [List Merged Branches](#list-merged-branches)
    - [Delete Remote Branch/Tag](#delete-remote-branchtag)
- [Refs](#refs)
    - [Get Current SHA1](#get-current-sha1)
- [Commits](#commits)
    - [Stage Files](#stage-files)
    - [Unstage Files](#unstage-files)
    - [Commit Staged Changes](#commit-staged-changes)
    - [Undo Local Commits With `git reset`](#undo-local-commits-with-git-reset)
    - [Undo Public Commits With `git revert`](#undo-public-commits-with-git-revert)
    - [Amend Commits](#amend-commits)
- [Tags](#tags)
- [Log](#log)
    - [Ranges](#ranges)
    - [Formatting](#formatting)

## Branches

### Create New Branches

```sh
git checkout -b branch-name
# Push to remote repo
git push origin branch-name --set-upstream
```

### Get Remote Branches

```sh
git fetch origin
git checkout --track origin/branch-name
```

### Checkout Previous Branch

```sh
git checkout -
```

Goes back to the previously checked out branch (like `cd -`).

### Rename Branch

```sh
git branch -m new-name
```

Rename the current branch to `new-name`.

```sh
git branch -m old-name new-name
```

Rename a branch called `old-name` to `new-name`.

### Rename Remote Branch

```sh
# Rename local branch
git branch -m old-name new-name
# Delete old-name remote branch and push new-name local branch
git push origin :old-name new-name
# Reset upstream branch for new-name local branch
git push origin new-name --set-upstream
```

### Delete Local Remote-Tracking Branches

```sh
git remote prune origin
```

Deletes `origin/*` branches in local copy. Doesn't affect the remote.

### List Merged Branches

```sh
git branch -a --merged
```

List outdated branches that have been merged into the **current one**.

### Delete Remote Branch/Tag

```sh
git push origin :branch-name
git push origin :tag-name
```

## Refs

```sh
HEAD^       # 1 commit before head, same as HEAD~1
HEAD^^      # 2 commits before head, same as HEAD~2
HEAD~5      # 5 commits before head
```

### Get Current SHA1

```sh
git show-ref HEAD -s
```

## Commits

### Stage Files

```sh
git add (file) [file 2] [file 3] ...
```

Adds files to the staging area, ready to be commited.

### Unstage Files

```sh
git reset HEAD (file)
```

Unstages a file but keeps changes made to the file.

### Commit Staged Changes

```sh
git commit
```

Opens the default text editor, which allows a multi-line commit message to be entered. Once the file is saved and closed, the commit is created.

```sh
git commit -m "message"
```

Creates a commit with the specified message. If multiple `-m` options are given, their values are concatenated as separate paragraphs.

```sh
git commit -a
```

Automatically stages all files that have been modified and/or deleted, and commits them (does not affect untracked files). Can be combined with the `-m` option.

### Undo Local Commits With `git reset`

_These should only be used for commits that have **NOT** yet been pushed to a remote. For undoing public commits, see [Undo Public Commits With `git revert`](#undo-public-commits-with-git-revert)._

```sh
git reset HEAD~
```

Keeps file changes but undoes the last commit and leaves changes unstaged. `HEAD~` is the same as `HEAD~1` and `HEAD^` _(see [Refs](#refs))_.

```sh
git reset --soft HEAD~
```

Similar to `git reset HEAD~`, but leaves existing file changes staged rather than unstaged.

```sh
git reset --hard HEAD~
```

Similar to `git reset HEAD~`, but discards **ALL** existing file changes in the commit. The commit can only be brought back if it is still in the reflog _(see [git-reflog](https://git-scm.com/docs/git-reflog))_.

```sh
# After changing file(s)
git add (files)
git commit -c ORIG_HEAD
```

`git reset` copies the old `HEAD` to `.git/ORIG_HEAD`. This can be used as a commit object for the new commit. `-c` will open a text editor to let you check the commit and change the commit message. `-C` can be used to skip this and commit with the old message.

_See also:_

* [Git Basics: Undoing Things](https://git-scm.com/book/en/v2/Git-Basics-Undoing-Things)
* [How to undo (almost) anything with Git](https://blog.github.com/2015-06-08-how-to-undo-almost-anything-with-git/)
* [git-reset](https://git-scm.com/docs/git-reset)

### Undo Public Commits With `git revert`

```sh
git log             # get the commit's SHA1
git revert (SHA1)
git push
```

`git revert` creates a new commit that's the inverse of the commit with given SHA. Anything removed in the old commit will be added to the new commit and anything added in the old commit will be removed from the new commit.

This is safe in the sense that it does not change any existing commits, but instead creates a new one.

_See also:_

* [git-revert](https://git-scm.com/docs/git-revert)
* [git-rebase](https://git-scm.com/docs/git-rebase)

### Amend Commits

```sh
git commit --amend
```

Replaces the tip of the current branch by creating a new commit. The new commit has the same parents and author as the current one. The default text editor will be invoked, allowing the commit message to be edited.

This is a rough equivalent for:

```sh
git reset --soft HEAD^
# ...change files here...
git commit -c ORIG_HEAD
```

_Be aware of the implications of rewriting history when changing commits that have already been pushed to a remote. See also: [git-rebase](https://git-scm.com/docs/git-rebase)._

## Tags

```sh
# List all tags
git tag
# Create annotated tag on latest commit
git tag -a 1.0.0 -m "Version 1.0.0 of Project"
# Push tags to remote
git push --tags
# Show latest commit of tag
git show 1.0.0
```

## Log

### Ranges

```sh
git log master            # branch
git log origin/master     # remote branch
git log 1.0.0             # tag
git log master develop    # multiple branches

git log app/file.md       # only file
# tags and branches
git log --simplify-by-decoration app/file.md

git log 2.0..master       # reachable from *master* but not *2.0*
git log 2.0...master      # reachable from *master* and *2.0*, but not both
```

### Formatting

```sh
git log --abbrev-commit
        --oneline
        --graph
```
