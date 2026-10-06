# Daymark Todo App

Daymark is a small, responsive todo list for keeping track of everyday tasks. It is built with plain HTML, CSS, and JavaScript, with no framework or build step.

## Features

- Add tasks, mark them complete, and delete them.
- Filter the list to show all, active, or completed tasks.
- See the total number of tasks and how many remain active.
- Keep tasks after a refresh using the browser's localStorage.
- Use the layout on desktop and mobile screens.

## Technologies

- HTML for the page structure
- CSS for responsive styling and layout
- JavaScript for task actions, filters, and localStorage

## Run locally

1. Download or clone this repository.
2. Open `index.html` in a modern web browser.

There are no packages to install and no build command. The Google Fonts used for the display typography require an internet connection; system fallback fonts are provided.

## Push to GitHub

1. Sign in to [GitHub](https://github.com/) and create a new, empty repository. Do not initialize it with a README, license, or `.gitignore` because this project already has its files.
2. Open a terminal in this project folder and run the following commands, replacing `YOUR-USERNAME` and `YOUR-REPOSITORY` with your GitHub details:

   ```sh
   git init
   git add index.html style.css script.js README.md PROJECT-SPEC.md
   git commit -m "Create Daymark todo app"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
   git push -u origin main
   ```

3. Your repository URL will be `https://github.com/YOUR-USERNAME/YOUR-REPOSITORY`.

If Git reports that this folder is already a repository, skip `git init`. If an `origin` remote already exists, update or use that remote instead of adding a second one.

## Deploy with GitHub Pages

1. Open the repository on GitHub and select **Settings**.
2. In the left sidebar, open **Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and the `/ (root)` folder, then select **Save**.
5. Wait for the Pages deployment to finish. The published URL appears in the Pages settings and usually follows this pattern:
   `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`

After pushing later changes to `main`, GitHub Pages will publish the updated files. Tasks are stored in each visitor's browser and are not shared between devices.

## Project links

- GitHub repository: `https://github.com/YOUR-USERNAME/YOUR-REPOSITORY`
- GitHub Pages site: `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`

Replace the example values with your GitHub username and repository name after creating and deploying the repository.
