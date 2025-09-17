# HAEC Project Setup

This document outlines the steps to get the project running in a local development environment.

## Prerequisites

- Git: https://git-scm.com/
- Node.js (v18+ recommended): https://nodejs.org/
- Yarn (preferred over npm): https://yarnpkg.com/

## Getting Started

1. Clone the repository:
    ```bash
    git clone git@github.com:honduq/haec.git
    cd haec
    ```

2. Install dependencies:
    ```bash
    yarn
    ```

3. Configure environment variables:
    ```bash
    cp .env.example .env
    ```

4. Create a `.env` file in the project root. Ensure it includes the following: (Replace `username`, `password`, and `your-database` with your actual database credentials.)
    ```bash
    DATABASE_URL="postgresql://username:password@localhost:5432/your-database"
    ```

5. Run Database Migrations
    ```bash
    npx prisma migrate dev --name init
    ```

6. Start Development Server
    ```bash
    yarn start:dev
    ```

7. Seed the Database (Optional) 
    #### If you need initial data in your database, run your SQL seed script using your preferred tool (e.g., pgAdmin, DBeaver, or the `psql` command line). For example:
    ```bash
    psql -U your_username -d your_database -f path/to/your/seed.sql
    ```
    #### (Replace your_username, your_database, and the path with your actual values.)
    
## SSH Setup (for all contributors)

1. **Generate a new SSH key** (if needed):
    ```bash
    ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
    ```

2. **Add your SSH public key to GitHub**:
   - GitHub instructions: https://docs.github.com/en/authentication/connecting-to-github-with-ssh

3. **Verify your SSH connection**:
    ```bash
    ssh -T git@github.com
    ```

## Dev Notes

- Yarn is preferred for dependency management to ensure consistency across environments.
- [How to Write a Good README File](https://www.freecodecamp.org/news/how-to-write-a-good-readme-file/)

# Postman
- brew install --cask postman

# prisma 
## Run initial migration
npx prisma migrate dev --name create-horse

## If run from outside the /haec folder:
npx prisma migrate dev --name create-horse --schema=haec/prisma/schema.prisma --env-file=haec/.env

## Generate Prisma client manually (usually auto after migrate)
npx prisma generate

# Kill Process on Port 3000

## Find the process using port 3000
lsof -i :3000

## Kill it by PID (replace 12345 with the real PID)
kill -9 12345

## One-liner to kill anything on 3000
kill -9 $(lsof -t -i :3000)
