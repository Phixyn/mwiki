# Git Cheatsheet

## Branches

### Creating

```sh
git checkout -b branch-name
git push origin branch-name --set-upstream
```

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
git log origin/master     # branch, remote
git log v1.0.0            # tag
git log master develop

git log app/file.md       # only file
# tags and branches
git log --simplify-by-decoration app/file.md

git log v2.0..master      # reachable from *master* but not *v2.0*
git log v2.0...master     # reachable from *master* and *v2.0*, but not both
```

### Formatting

```sh
git log --abbrev-commit
        --oneline
        --graph
```
