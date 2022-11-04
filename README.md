# node.js

This repository is learning/reviewing [Nodejs from Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11561820?start=60#overview)

## Content in this repository

* These sections were added in the order they were worked on.

* [First Application](./first_app)
* [Assignment 1](./assign1) - create your own server
* [Understanding NPM package](./understnading_npm)
* [Express](./express/) - faster way of creating servers, intro
* [Assignment 2](./assign2/)
* [Express Requests](./express-reqs/), how to route, post, get and add html
* [Assignment 3](./assign3/)
* [Dynamic Content & Templating](./express_dynamic/)
* [Assignment 4](./assign4/)

### Notes on node.js

Node allows for access to file systems and functionality both locally and within applications.

* Use cases

* JS Runtime
* Server-side code
* Utility Script
* Build Tools  
* Run Server - creates and listens for reqs.
  * Business Logic - handling req. validate input, connect to db
  * Response  - return response (rendering in formats HTML, JSON, XML etc...)

#### Run tools

Terminal -> node first_name.js

CTRL + C to exit terminal

Looks at the package.json and see scripts. Using `npm script_item_name`;

#### Errors

Three Kinds

1. Syntax - related to issues within the formatting, keywords or text provided within your code
2. Runtime - incorrect execution/order where code should start and stop.
3. Logical - not predicted outcome.

##### How to spot errors

* General
Looks for wiggly red lines.
Start application and view the terminal window and it should give use the line.

Run the code and look for the error messages

1. Look at the line where the item is missing
2. Read your error message, look at the top of it.
3. Use debugger is recommended

##### How to start debugger w/ nodejs

VS Code, go to menu: Run -> Start Debugger

#### Glossary

fs - filesystem

##### Additional technologies used in the repository

[nodemon](https://www.npmjs.com/package/nodemon)
[express](https://expressjs.com/)
[body-parser](https://www.npmjs.com/package/body-parser) - currently included as integrations, but has been removed in the past. To prevent issues with future version, best practice is to always install.

Templating tools:

* [EJS](https://ejs.co/)
* [Pug (aka Jade)](https://pugjs.org/api/getting-started.html)
* [Handlebars (specifically express-handlebars)](https://github.com/express-handlebars/express-handlebars)
