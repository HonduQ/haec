# HAEC Project Setup

This document outlines the steps to get the project running in a local development environment.

## Prerequisites

- Git
- Node.js (v23.11.0 or higher)
- Yarn (preferred over npm)

## Getting Started

1. **Clone the Repository**
   ```bash
   git clone git@github.com:honduq/haec.git
   cd haec

2. **Install Dependencies**

    ```bash
    yarn

3. **Configure Environment Variables**

    Copy .env.example to .env and update as needed:

    ```bash
    cp .env.example .env
    
4. **Run Migrations (if applicable)**

    ```bash
    npx prisma migrate dev

5. **Start the Development Server**

    ```bash
    yarn start:dev

6. **SSH Setup**

- For authenticated Git operations via SSH:

- Generate a new SSH key (if you don’t already have one).

- Add the public key to your Git provider (e.g., GitHub).

- Verify the connection:

    ```bash
    ssh -T git@github.com

**Notes**
- Yarn is preferred for consistency across environments.

- Project uses Prisma for database migrations.