# My Travel Site Demo

This repository is a demo project showing how to use the [travel-site template](https://github.com/bascanada/travel-map). It demonstrates the recommended project structure, build process, and deployment pipeline for a travel photo/video site.

## Quick Start Guide

Follow these steps to use this template for your own travel site:

1. **Read how to structure your data**
   - See the [Data Folder Structure](#data-folder-structure) section below for details.
2. **Add your folders of pictures and videos**
   - Organize your media in the `/data/[travel]/[itinerary]/` folders as described.
3. **Generate the JSON annotation files**
   - Use the provided Docker command to run the scripts and generate the necessary JSON files for your data.
4. **Manually check that everything is correct**
   - Review the generated JSON files and your folder structure to ensure accuracy.
5. **Check fields in `travel-site.config.js` and edit the values accordingly**
   - Update site configuration such as site name, description, and other settings as needed.
6. **Commit and push your site to build and release it**
   - The GitHub Actions workflow will automatically build and deploy your site to GitHub Pages.

## Data Folder Structure

Your travel data, images, and videos should be organized in the `data` folder as follows:

```
/data/
  [travel]/           # e.g., usa_2025, europe_2024, etc.
    [itinerary]/      # e.g., alabama, new_orleans, etc.
      [photo|video]   # e.g., 20250103_132706.jpg, 20250107_161122.mp4
```

- **[travel]**: A folder for each trip or travel year (e.g., `usa_2025`).
- **[itinerary]**: Subfolders for each location, region, or segment of the trip (e.g., `alabama`, `new_orlean_missisipi`).
- **[photo|video]**: Place your media files (JPEG, MP4, etc.) in the appropriate itinerary folder.
- Each itinerary folder can also contain a metadata JSON file (e.g., `alabama-metadata.json`) describing the media or itinerary.

This structure allows the scripts to generate the correct JSON files and makes it easy to organize and find your travel content.

## Generating JSON Data with Docker

To generate the required JSON files for your travel data, you can use the provided scripts inside a Docker container using the pre-built image from the GitHub Container Registry. This ensures a consistent environment and avoids dependency issues.

### Example: Generate Travel Data JSON

1. Pull the pre-built Docker image:
   ```sh
   docker pull ghcr.io/bascanada/travel-site-builder:latest
   ```
2. Run the script inside the container, mounting your data directory:
   ```sh
   docker run --rm -v $(pwd)/data:/app/data ghcr.io/bascanada/travel-site-builder:latest node scripts/process-all-travel-data.js ./data
   ```
   - Replace `scripts/process-all-travel-data.js` with the script you want to run.
   - Adjust the volume path if your data is in a different location.

## Purpose

- **Showcase**: Demonstrates how to organize your travel data, images, and videos using the template.
- **Reference**: Provides a working example for customizing and deploying your own travel site.
- **CI/CD Example**: Includes a GitHub Actions workflow for building and deploying the site to GitHub Pages.

## How to Use This Template

1. **Clone this repository** to start your own travel site project.
2. **Replace demo content** in the following folders:
   - `/data/` — Replace or add your own travel data, images, and videos.
   - `travel-site.config.js` — Update configuration to match your site’s needs.

3. **Add your own images and videos** to the appropriate folders. If you have large files, Git LFS is already set up for `.jpg`, `.jpeg`, and `.mp4` files.

4. **Commit and push** your changes to GitHub. The GitHub Actions workflow will automatically build and deploy your site to GitHub Pages.

## Overwritable Files

- `/data/` — All travel data, images, and videos.
- `travel-site.config.js` — Site configuration.

## Deployment

On every push to the `main` branch, the site is built and the contents of the `build` folder are deployed to GitHub Pages automatically.

## Notes

- This demo uses Git LFS for large media files. Make sure you have [Git LFS](https://git-lfs.github.com/) installed.
- You can further customize the template to fit your needs.

---

## Preview Your Site

Once your site is deployed, you can view it on GitHub Pages:

- **Preview URL:**
  [https://wquintal.github.io/my-travel-site/](https://wquintal.github.io/my-travel-site/)

Replace `my-travel-site` in the URL above if you fork or rename the repository.

For more details, see the [template repository](https://github.com/bascanada/travel-map) or open an issue if you have questions.



