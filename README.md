Here's a `README.md` file that explains how to install and run the dashboard application:

```markdown
# India Data Hub Dashboard

This project is a dashboard application built with React.js, providing a data analytics interface inspired by the India Data Hub platform. It allows users to navigate through categories, switch datasets, view economic metrics, and access other key features as per the provided design.

## Features

- **Login Page**: Users can log in with a sleek and minimalistic design.
- **Data Navigation**: Side menu to navigate through various categories, with main content displaying selected data.
- **Dataset Switching**: Dropdown to select datasets (e.g., Default, IMF).
- **Pagination**: View data in paginated format, 10 records at a time.
- **Save Options**: Save functionalities within the economic monitor bar.

## Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/en/) (version 14.x or above)
- [npm](https://www.npmjs.com/) (Node Package Manager, comes with Node.js)

## Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/india-data-hub-dashboard.git
   cd india-data-hub-dashboard
   ```

2. **Install Dependencies**
   Use npm to install all necessary packages.
   ```bash
   npm install
   ```

## Running the Application

1. **Start the Development Server**
   To run the application in development mode:
   ```bash
   npm start
   ```
   The application will start, and you can view it in your browser at `http://localhost:3000`.

2. **Build for Production**
   To create an optimized build of the application:
   ```bash
   npm run build
   ```
   The build files will be generated in the `build` folder.

## Usage

- **Login**: Enter credentials and click on the login button to access the dashboard.
- **Navigating Data**: Use the sidebar to switch between categories. The main content area displays data based on your selection.
- **Switching Datasets**: Use the "Database" dropdown in the navbar to switch between the Default and IMF datasets.
- **Pagination**: Navigate through records with the pagination controls at the bottom of the data table.
- **Save & Filter**: Use the Save and Filter buttons within the economic monitor bar for additional functionality.

## Troubleshooting

If you encounter issues:
- Make sure all dependencies are installed (`npm install`).
- Check that Node.js and npm are up-to-date.
- Restart the server with `npm start`.

This `README.md` file provides a comprehensive guide on setting up, running, and using the dashboard application. Make sure to replace the repository URL with the actual URL if you're uploading it to GitHub.
