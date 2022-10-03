## Creating an express server with dynamic rendering 
The section covered:
* Managing Data (w/o a db)
* Rending Dynamic Content in Views (html)
* Understanding Templating Engines

### Templates
This usually refers to HTML contains pre-rendered with placeholders to information that should be rendered through node.js
Examples of such templates: 
* [EJS](https://ejs.co/)
* [Pug (aka Jade)](https://pugjs.org/api/getting-started.html)
* [Handlebars (specifically express-handlebars)](https://github.com/express-handlebars/express-handlebars)

Some template engines are integrated into to express and can be called and predefined using `app.set();`. This is used in conjunction with the `res.render();` used within the route. 

#### Pug
If you create a .pug file, using the html5 template, the pug formatting will automatically be included.
This is a simplified HTML formatting. 
Indentation does matter.

Adding content dynamically so you only have to render the specific sections with the keyword `block`.
You will used `extends` to the path of the main pug document and add `block typeName` and then indent with the type information.

#### EJS

#### Handlebars 

Package is not auto installed by express, this will have to be imported to be viewed. 