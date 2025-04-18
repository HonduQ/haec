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
``bash
yarn
```
3. Configure environment variables:
- Copy the example environment file and update values as needed:
``bash
cp .env.example .env
```
4. Run database migrations:
``bash
npx prisma migrate dev
```
5. Start the development server:
``bash
yarn start:dev
```
## SSH Setup (if using SSH for Git)
1. Generate a new SSH key (if needed):
``bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```
2. Add your SSH public key to your Git provider:
- GitHub instructions: https://docs.github.com/en/authentication/connecting-to-github-with-ssh

3. Verify your SSH connection:
``bash
ssh -T git@github.com
```
## Notes
- Yarn is preferred for dependency management to ensure consistency across environments.

- The project uses Prisma for database management and migrations. Visit [Prisma Docs](https://www.prisma.io/docs) for more information.