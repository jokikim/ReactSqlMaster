# 🚀👨‍💻 REACT SQL Editor

## Optimizing Your SQL Query Management Web Application for Enhanced User Experience

React SQL Editor is a sophisticated tool designed for data analysts to execute and manage SQL queries seamlessly. It offers an intuitive interface that allows users to run queries, view results in tabular format, and save frequently used queries for future reference. 

![Homepage](src/assets/screenshots/screenshot-readme.png)

## 👨‍💻 Demo

<a href="https://github.com/rishipurwar1/coding-space" target="blank">
<img src="https://img.shields.io/website?url=https://www.codingspace.codes&logo=github&style=flat-square" />
</a>

Try out the website : [REACT SQL Editor](https://reactsqlmaster.vercel.app/)

## 👨‍🔧 Tech Stack

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

## 👨‍💻 Features

:white_check_mark: Query Fetching.\
  1. CSV data is fetched from teh github repo itself.
  2. Data is not stored locally.

:white_check_mark: Code Editor Tabs.\
  1. App uses tab-based interface to manage multiple sql queries
  2. Each tab runds different query.

:white_check_mark: SQL Query Execution in Editor.\
  1. Users can run SQL queries by writing the predefined queries in the editor.
  2. Users can run following predefined queries: 
     
    - `select * from customers`
    - `select * from categories`
    - `select * from employee_territories`
    - `select * from order_details`
    - `select * from orders`
    - `select * from products`
    - `select * from regions`
    - `select * from shippers`
    - `select * from suppliers`
    - `select * from territories`

:white_check_mark: Full Screen View Of Editor.\
   User can toggle between full screen to get the full screen view of the editor.

:white_check_mark: Dark Mode & Local storage usage. \
  1. User can toggle between Dark Mode and Light Mode.
  2. Current theme is persisted in the Local Storage.

:white_check_mark: Split View. \
  1. User can see the split view of Code Editor & the Results.
  2. The Split window is Draggle Vertically.

:white_check_mark: Execution time. \
  User can see time taken by the query to run  & fetch results.

:white_check_mark: Table Schema. \
  User can see the information related to the tables including number of rows, rows per page & the table headers..

:white_check_mark: Execution time. \
  User can see time taken by the query to run  & fetch results.

:white_check_mark: Toast Notifcations. \
  User is notified by Toasts on sucessfully query or error.

:white_check_mark: Export CSV or JSON. \
  User can download results in the CSV or JSON format.

:white_check_mark: Toast Notifcations. \
  User is notified by Toasts on sucessfully query or error.


## ⏱ Page Load Time

Page Load time of this website in desktop is in the range of 0.4 s to 0.6s.

I calculated the performance and load time of this website using these two tools Lighthouse Chrome DevTools and BrowserStack SpeedLab.

## 🚀Lighthouse Chrome Report (got a perfect 💯)

![lighthouse report](src/assets/screenshots/lighthousescore.jpg)

![Lighthouse Report](src/assets/screenshots/lighthousemetrics.jpg)


- **First Contentful Paint** marks the time at which the first text or image is painted
- **Time to interactive** is the amount of time it takes for the page to become fully interactive.
- **Speed Index** shows how quickly the contents of a page are visibly populated.
- **Total Blocking Time** is the sum of all time periods between FCP and Time to Interactive, when task length exceeded 50ms, expressed in milliseconds.
- **Largest Contentful Paint** marks the time at which the largest text or image is painted.
- **Cumulative Layout Shift** measures the movement of visible elements within the viewport.


## 🪜 Steps I took to optimize the page load time

- Used code-splitting with `React.Lazy()` and `Suspense` to lazy load the components and split javaScript into multiple chunks using Dynamic runtime Imports for faster page load.
- Used `React.Memo()` to optimize the render performance of functional components.
- Used Lighthouse DevTools Extension to find the performance issues and fix them using their actionable suggestion.
- Used vercel to deploy this website to leverage its Vercel Edge Network compression that results in the better performance.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.