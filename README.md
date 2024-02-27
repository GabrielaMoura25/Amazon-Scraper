# Amazon-Scraper

This is a web scraping project that allows you to search for products on Amazon and display the results on a web page. The project consists of a web application that uses Node.js on the backend to perform data scraping and serve an API, and HTML, CSS, and JavaScript on the frontend to create the user interface and interact with the API.

### Features:

>Amazon product search: Users can enter a keyword in the search box and click the "Scrape" button or press Enter to initiate the search.

>Results display: The search results are displayed on the page as product cards, showing the title, rating, reviews, and product image.

>"No results found" message: If no results are found for the entered keyword, a message indicating this will be displayed on the page.

### Technologies used:

1. Node.js: Used on the backend to create the server and perform data scraping.
2. Express.js: Web framework used to create routes and serve the API.
3. Axios: Library used to make HTTP requests to Amazon.
4. Cheerio: Library used to parse and manipulate the HTML of the Amazon page.
5. HTML, CSS and JavaScript: Used on the frontend to create the user interface and interactivity.

### How to run the project:

Make sure you have Node.js installed on your machine.

Clone this repository:
```bash
git clone git@github.com:GabrielaMoura25/Amazon-Scraper.git
```

Open a terminal in the project folder and install the dependencies by running the command:
```bash
npm install
```

To start the server, run:
```bash
npm start
```

Open a web browser and go to http://localhost:3000.

Enter a keyword in the search box and press Enter or click the "Scrape" button to initiate the search.

Note:
This project is for educational purposes only and should not be used to violate the terms of service of any website. Make sure to use web scraping ethically and respectfully.

Developed by Gabriela Moura, © 2024.
