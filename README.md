# Hogwarts Bookshelf Backend

## Live link: https://hogwarts-bookshelf-be-with-sql.vercel.app

## API Routes:

## User Routes

- `/api/v1/auth/signup` (POST)
- `/api/v1/users` (GET)
- `/api/v1/users/7cb85a5e-1363-4ae4-be70-10ac788cfbe2` (Single GET)
- `/api/v1/users/7cb85a5e-1363-4ae4-be70-10ac788cfbe2` (PATCH)
- `/api/v1/users/9fd1411c-a3ce-46df-8af1-39c2e25bfa6b` (DELETE)
- `/api/v1/profile` (GET)

## Category Routes

- `/api/v1/categories/create-category` (POST)
- `/api/v1/categories` (GET)
- `/api/v1/categories/50d49f06-54da-4988-8a9a-4f9f4fe81d10` (Single GET)
- `/api/v1/categories/dd15db2a-a3f2-4e64-8b0f-aef86b877711` (PATCH)
- `/api/v1/categories/dd15db2a-a3f2-4e64-8b0f-aef86b877711` (DELETE)

## Books Routes

- `/api/v1/books/create-book` (POST)
- `/api/v1/books` (GET)
- `/api/v1/books/:categoryId/category` (GET)
- `/api/v1/books/daf874f9-cf3c-434a-ae1d-4b2af38acf1b` (GET)
- `/api/v1/books/75c33fd3-53b0-4df5-a717-0d9e24ac2b4c` (PATCH)
- `/api/v1/books/75c33fd3-53b0-4df5-a717-0d9e24ac2b4c` (DELETE)

## Orders Routes

- `/api/v1/orders/create-order` (POST)
- `/api/v1/orders` (GET)
- `/api/v1/orders/dd5428ba-3bd8-4d56-b820-da3551285a82` (GET)
