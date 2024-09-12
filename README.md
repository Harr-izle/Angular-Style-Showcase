# Angular Style Showcase

This project demonstrates proficiency with Angular CLI and advanced SCSS features. It showcases a component-based architecture, responsive layout, and utilizes various SCSS features in a modern Angular development environment.

## Project Description

The Angular application implements a responsive layout with multiple components, demonstrating the use of advanced SCSS features such as variables, nesting, mixins, functions, extend/inheritance, and partials. It also includes a theme system, custom directives, and lazy loading.

## Setup Instructions

1. Clone the repository:

```
git clone https://github.com/yourusername/angular-style-showcase.git
cd angular-style-showcase
```

2. Install dependencies:

```
npm install
```

3. Run the development server:

```
ng serve
```

4. Open your browser and navigate to `http://localhost:4200`

## Available npm Scripts

- `ng serve`: Start the development server
- `ng build --prod`: Create a production build
- `ng lint`: Run ESLint on the source files
- `ng test`: Run Karma tests

## Build Process Explanation

1. The development build uses Angular CLI's built-in server for hot reloading and faster development.
2. The production build optimizes the code by minifying JavaScript and CSS, and implementing ahead-of-time compilation.
3. TypeScript is transpiled to JavaScript to ensure browser compatibility.
4. Sass is compiled to CSS and processed according to the Angular build process.
5. ESLint is used for code linting to maintain code quality.
6. Karma is used for unit testing.

## Project Structure

- `src/`: Contains the source code
  - `app/`: Angular application files
    - `components/`: Angular components
    - `directives/`: Custom directives
    - `services/`: Angular services
    - `modules/`: Feature modules
  - `assets/`: Static assets
  - `styles/`: SCSS files
    - `_variables.scss`: SCSS variables
    - `_mixins.scss`: SCSS mixins
    - `_functions.scss`: SCSS functions
    - `_themes.scss`: Theme definitions
    - `main.scss`: Main stylesheet
- `angular.json`: Angular CLI configuration
- `tsconfig.json`: TypeScript configuration
- `.eslintrc.json`: ESLint configuration
- `karma.conf.js`: Karma configuration

## SCSS Architecture and Features

1. **Variables**: Used for colors, fonts, and spacing to ensure consistency.
2. **Nesting**: Employed for component-specific styles, improving readability.
3. **Mixins**: Created for reusable style patterns such as flexbox layouts and button styles.
4. **Functions**: Implemented for dynamic value calculations, like converting pixels to rem units.
5. **Extend/Inheritance**: Utilized to share common styles across multiple selectors.
6. **Partials**: Styles are organized into separate files for better modularity.
7. **Theming**: A theme system is implemented with light and dark themes.

## Learn More

To learn more about the tools used in this project, check out their official documentation:

- [Angular](https://angular.io/docs)
- [Angular CLI](https://cli.angular.io/)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Sass](https://sass-lang.com/documentation)
- [ESLint](https://eslint.org/docs/user-guide/)
