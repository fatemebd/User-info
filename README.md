

# User Details Project

A simple React project that displays user details using Vite, Ant Design, TypeScript, and Tailwind CSS.


## Prerequisites

Make sure you have these installed:

- [Node.js](https://nodejs.org/) (v14 or above)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

## Installation

Clone the repository and install dependencies:

```bash
# Clone the repository
git clone https://github.com/fatemebd/User-info.git

# Navigate into the project directory
cd User-info

# Install dependencies
npm install
# or, if you prefer Yarn
yarn install
```

## Local Variables
```
VITE_BASE_URL = https://reqres.in/api
```

## Running the Project

To start the development server:

```bash
# For npm
npm run dev

# For Yarn
yarn dev
```

This will start the project in development mode, and you can access it at `http://localhost:5173/usersInfo`.

## Building for Production

To create an optimized production build:

```bash
# For npm
npm run build

# For Yarn
yarn build
```

The production build will be located in the `dist` folder.

## Project Structure

```plaintext
├── src
│   ├── components       # Reusable components (e.g., user details card)
│   ├── pages            # Pages (e.g., users list page)
│   ├── utils            # Utility functions
│   └── types            # Common types
│   ├── App.tsx          # Main App component
│   └── main.tsx         # Application entry point

├── public               # Static assets
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```
