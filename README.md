*HAEC Project Setup
This document outlines the steps to get the project running in a local development environment.

## Prerequisites
- Git: https://git-scm.com/

- Node.js (v18+ recommended): https://nodejs.org/

- Yarn (preferred over npm): https://yarnpkg.com/

## Getting Started
Clone the repository:
- git clone git@github.com:honduq/haec.git
- cd haec

## Install dependencies:
- yarn

## Configure environment variables:
Copy the example environment file and update values as needed:
- cp .env.example .env

## Run database migrations:
- npx prisma migrate dev

##  Start the development server:
- yarn start:dev

## SSH Setup (if using SSH for Git)
Generate a new SSH key (if needed):
- ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

## Add your SSH public key to your Git provider:
- GitHub instructions: https://docs.github.com/en/authentication/connecting-to-github-with-ssh

## Test your SSH connection:
- ssh -T git@github.com

## Notes
- Yarn is preferred for dependency management to ensure consistent builds across environments.

- This project uses Prisma for database management and migrations: https://www.prisma.io/