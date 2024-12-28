# Salary Calculator (Work app)

## Overview

This is a personal project designed to calculate the monthly salary for my current job. The salary calculation is based on various factors such as:

- Regular working hours
- Sunday hours
- Morning hours
- Tips (calculated on each month's payroll)

The tool is built with TypeScript, Next.js, Prisma Studio, React, and Tailwind CSS. Currently, it is a work in progress, and only the code is available at the moment.

## Features

- **Hourly Calculation**: Computes monthly salary based on hours worked.
- **Different Hour Types**: Supports different types of hours (regular, Sundays, morning hours).
- **Tips Calculation**: Takes monthly tips into account for a more accurate salary estimate.

## Tech Stack

- **TypeScript**: For type safety and development efficiency.
- **Next.js**: Framework for building the app, providing server-side rendering, and API routes.
- **Prisma Studio**: ORM for managing the database.
- **React**: UI library for building interactive components.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- 

## Installation

To run the project locally, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/camelia96/work-app
cd work-app
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up the database (optional)
This project uses Prisma, so you may need to set up the database. Follow the Prisma setup instructions in the Prisma documentation. The .sql file is in the root project.

### 4. Run the project
```bash
npm run dev
```

Visit http://localhost:5173 in your browser.


## Usage
- Input your regular hours, Sunday hours, and morning hours in the provided fields.
- Enter your estimated tips for the year.
- 
The app will calculate your monthly salary based on the inputs.


## Contributing
This project is a work in progress, but contributions are welcome! Feel free to fork the repository, submit issues, or make pull requests.
