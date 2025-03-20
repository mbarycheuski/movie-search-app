# Movie Search App

## Overview
The Movie Search App is a web application that allows users to search for movies, view detailed information about them, and manage their favorite movies. It is built using modern web technologies and follows best practices for performance and maintainability.

## Features
- Search for movies by title.
- View detailed information about a selected movie, including genres, ratings, and descriptions.
- Add, update, or remove movies from your favorites list.
- Filter favorite movies based on custom criteria.
- Pagination support for browsing large lists of movies.
- Responsive design for seamless usage across devices.

## Technologies Used
- **Frontend**: React with TypeScript
- **State Management**: Redux Toolkit
- **Routing**: React Router
- **Styling**: Bootstrap 5
- **API**: The Movie Database (TMDb) API
- **Build Tool**: Vite
- **Testing**: Jest

## Folder Structure
```
src/
  api/          # API services and models
  assets/       # Static assets like images
  components/   # Reusable UI components
  hooks/        # Custom React hooks
  pages/        # Page-level components
  store/        # Redux store and slices
  transforms/   # Data transformation utilities
  types/        # TypeScript type definitions
  utils/        # General utility functions
```

## Getting Started

### Prerequisites
- Node.js (>= 14.x)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd movie-search-app
   ```
3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the App
To start the development server:
```bash
npm run dev
# or
yarn dev
```
The app will be available at `http://localhost:5173`.

### Building for Production
To create a production build:
```bash
npm run build
# or
yarn build
```
The build output will be in the `dist/` directory.

### Running Tests
To run the test suite:
```bash
npm test
# or
yarn test
```

## API Integration
This app uses the TMDb API for fetching movie data. To use the app, you need to provide an API key:
1. Create a `.env` file in the root directory.
2. Add your TMDb API key:
   ```env
   VITE_MOVIE_DB_API_TOKEN=your_api_key_here
   ```

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes and push the branch.
4. Open a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments
- [TMDb API](https://www.themoviedb.org/documentation/api) for providing movie data.
- Bootstrap for styling.
- The open-source community for their invaluable tools and libraries.