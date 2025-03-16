![DarkSoulsWikiLogo](./public/mstile-144x144.png)

# Dark Souls Wiki

A personal project focused on organizing and displaying data related to Dark Souls.

## Table of Contents

1. [Features](#features)
2. [Built With](#built-with)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Technologies Used](#technologies-used)

## Features

- **Scalable**: Easily expandable with additional data.
- **Responsive Design**: Optimized for various screen sizes, providing a seamless user experience on any device.
- **User-Friendly**: Simple navigation, allowing users to quickly find information about different weapon categories.
- **Database Integration**: All data previously stored in the `public` folder is now stored in a MongoDB database for better scalability and organization.

## Built With

- [Next.js](https://nextjs.org/) — A React framework for server-side rendering and static site generation.
- [TypeScript](https://www.typescriptlang.org/) — Adds static types to JavaScript for more robust code.
- [MongoDB](https://www.mongodb.com/) — A NoSQL database for managing and storing Dark Souls data efficiently.
- [Sass](https://sass-lang.com/) — CSS extension with enhanced styling capabilities.

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Zardocius/dark-souls-wiki.git
   cd dark-souls-wiki
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env.local` file in the root directory and add your MongoDB connection string:

   ```bash
   MONGODB_URI=your-mongodb-connection-string
   ```

4. **Start the development server**:

   ```bash
   npm run dev
   ```

   Once the server is running, open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Usage

- Browse weapon categories.
- View weapon stats, descriptions, and images.
- Navigate easily between categories and detailed weapon pages.
- Data is now dynamically retrieved from MongoDB, ensuring up-to-date information.

## Technologies Used

- **Next.js**: React framework for server-side rendering and static site generation.
- **TypeScript**: For strong typing and improved code quality.
- **SCSS (Sass)**: CSS preprocessor for writing more maintainable and modular styles.
- **MongoDB**: NoSQL database for efficient data storage and retrieval.
- **React Hook Form**: For handling form validation and user inputs.
- **Python**: Used for data organization and manipulation.
- **[DSMapStudio](https://github.com/soulsmods/DSMapStudio)**: A tool for extracting and organizing data from _Dark Souls: Prepare to Die Edition_.

---

