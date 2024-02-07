# booker

A full-stack personal project based on a technological gap I identified in my previous job.

The core premise of the app is for a school to keep track of students, classes, books that the school owns, as well as handle lending of books to students.

Users can:
- add a new student to a specific class, identifying both the student and class with properties like name, age, teacher, class name, etc.
- add a new book to the "library", providing name of book, publication year, IMDB code, genre, artwork, etc.

To do:
- allow users to assign a book to a student, specifying the loan time (1 or 2 weeks)
- add auth that would ideally work on a "school" level rather than an individual level


This is a [Next.js](https://nextjs.org/) project
bootstrapped with
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open
[http://localhost:3000](http://localhost:3000)
with your browser to see the result.

You can start editing the page by modifying
`app/page.js`. The page auto-updates as you edit
the file.

This project uses
[`next/font`](https://nextjs.org/docs/basic-features/font-optimization)
to automatically optimize and load Inter, a custom
Google Font.

## Learn More

To learn more about Next.js, take a look at the
following resources:

- [Next.js Documentation](https://nextjs.org/docs) -
  learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an
  interactive Next.js tutorial.

You can check out
[the Next.js GitHub repository](https://github.com/vercel/next.js/) -
your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to
use the
[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out our
[Next.js deployment documentation](https://nextjs.org/docs/deployment)
for more details.

<!-- prettier-ignore -->
TODO:
[O] correctly hook up POSTing books
[] render books to library
[] addStudent form
[] add pages for students,books and on loan
[] allow the creation of "loans"
