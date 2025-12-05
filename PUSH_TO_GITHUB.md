# Push to GitHub - Instructions

## After creating your GitHub repository, run these commands:

```bash
# Add the remote (replace YOUR_USERNAME and REPO_NAME with your actual values)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Rename branch to main if needed (if you're on master)
git branch -M main

# Push to GitHub
git push -u origin main
```

## Example:
If your GitHub username is `joshuanau` and repository name is `jashua-nau-realtor`:

```bash
git remote add origin https://github.com/joshuanau/jashua-nau-realtor.git
git branch -M main
git push -u origin main
```

## If you need to authenticate:
- GitHub may prompt for username and password
- For password, use a Personal Access Token (not your GitHub password)
- Create token at: https://github.com/settings/tokens
- Select scope: `repo` (full control of private repositories)

