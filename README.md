# Hogwarts Bookshelf Backend

## Live link: https://hogwarts-bookshelf-be-with-sql.vercel.app

## API Routes:

## User Routes

- `/api/v1/auth/signup` (POST)
- `/api/v1/auth/signin` (POST)
- `/api/v1/users` (GET)
- `/api/v1/users/20888e69-5f2b-4c26-a99b-2b9a21e68a88` (Single GET)
- `/api/v1/users/8f1fa465-d3c9-4063-b027-9406885bbff0` (PATCH)
- `/api/v1/users/8f1fa465-d3c9-4063-b027-9406885bbff0` (DELETE)
- `/api/v1/profile` (GET)

## Category Routes

- `/api/v1/categories/create-category` (POST)
- `/api/v1/categories` (GET)
- `/api/v1/categories/d0e3fed7-a6bb-4d36-a7f9-5aa831053bf8` (Single GET)
- `/api/v1/categories/0063ad05-309a-41c9-9f99-eb942219a5c5` (PATCH)
- `/api/v1/categories/0063ad05-309a-41c9-9f99-eb942219a5c5` (DELETE)

## Books Routes

- `/api/v1/books/create-book` (POST)
- `/api/v1/books` (GET)
- `/api/v1/books/d0e3fed7-a6bb-4d36-a7f9-5aa831053bf8/category` (GET)
- `/api/v1/books/e5355a36-92d3-4645-b0ad-e819ff72a598` (GET)
- `/api/v1/books/439ee2fc-e9fd-4deb-a126-045c27e6fc6e` (PATCH)
- `/api/v1/books/439ee2fc-e9fd-4deb-a126-045c27e6fc6e` (DELETE)

## Orders Routes

- `/api/v1/orders/create-order` (POST)
- `/api/v1/orders` (GET)
- `/api/v1/orders/67ac56a5-1729-4905-bd05-5d3af462e806` (GET)
