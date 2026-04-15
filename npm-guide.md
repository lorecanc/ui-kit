# Publishing @csa-italy/havas-ui

## Prerequisites

1. **GitHub Personal Access Token** with `write:packages` scope (for publishing) or `read:packages` (for installing)
2. **npm logged in** to GitHub Packages registry

## First Time Setup

### 1. Create GitHub Token

1. Go to: https://github.com/settings/tokens/new
2. Select scopes: `read:packages`
3. Copy the token

### 2. Login to GitHub Packages

```bash
npm login --registry=https://npm.pkg.github.com
# Username: your GitHub username
# Password: your GitHub token (NOT your password!)
# Email: your GitHub email
```

Or create `~/.npmrc` globally:
```
//npm.pkg.github.com/:_authToken=YOUR_TOKEN
```

### 3. Create project .npmrc (for users of your library)

In their project root:
```
@csa-italy:registry=https://npm.pkg.github.com
```

## Publishing a New Version

### 1. Update version

```bash
npm version patch  # or minor, major
```

### 2. Build

```bash
npm run build
```

### 3. Publish

```bash
npm publish --access public
```

## Usage in Other Projects

```bash
# Install
npm install @csa-italy/havas-ui

# In your code
import { Button } from '@csa-italy/havas-ui'
import '@csa-italy/havas-ui/theme.css' // or import in CSS
```

## Troubleshooting

### 401 Unauthorized
- Token expired or incorrect
- Run `npm logout` and `npm login` again

### 403 Forbidden
- Token doesn't have `read:packages` scope
- Check token permissions at https://github.com/settings/tokens

### 404 Not Found
- Package not found, check registry URL is correct
- Run `npm config get registry` to check