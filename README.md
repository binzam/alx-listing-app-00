# ALX Listing App

## Project Overview

The **ALX Listing App** is a property listing application inspired by platforms like Airbnb. It allows users to browse property listings with detailed information, enabling them to interact with actions such as viewing property details or booking. This project focuses on clean architecture, reusable components, and modern web development practices.

## Project Goals

- Build a visually appealing, responsive property listing page.
- Implement reusable components to improve scalability and maintainability.
- Ensure type safety with TypeScript for a robust development experience.
- Simplify project configuration with constants and interfaces for consistent behavior.

## Project Structure

### 1. `components/`

Holds all reusable UI components for the application.

- **`common/Card.tsx`**: A reusable card component for displaying property information like title, description, and images.
- **`common/Button.tsx`**: A reusable button component for actions like "Book Now" and "Details."

---

### 2. `interfaces/`

Defines all TypeScript interfaces for props and project-wide types.

- **`index.ts`**: Centralized location for interface definitions like `CardProps` and `ButtonProps`.

---

### 3. `constants/`

Stores project constants, such as API URLs, configuration settings, and reusable strings.

- **`index.ts`**: A single file containing constants for text labels and API URLs.

---

### 4. `public/assets/`

Contains static assets like images, icons, or logos that are used across the application.

## Getting Started

### 1. Prerequisites

Before running the project, ensure you have the following installed:

- **Node.js** (v14 or later)
- **npm** or **yarn**

### 2. Clone the Repository

```bash
git clone https://github.com/binzam/alx-listing-app.git
cd alx-listing-app
```

### 3. Install Dependencies

Run the following command to install all necessary dependencies:

```bash
npm install
```

### 4. Run the Development Server

Start the development server to preview the app:

```bash
npm run dev
Open http://localhost:3000 in your browser to view the application.
```
