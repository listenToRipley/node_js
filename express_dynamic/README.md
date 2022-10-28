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

#### Handlebars 
Logic statements will not be completed by HBS, but instead must be passed as keys with perviously completed within your JS file. 

`{{#if}} key {{/if}}` - if statement 
`{{#if}} key {{else}} <span> html statement </span> {{/if}}` - if else statement
`{{#each}} key {{/each}}` - each statement 
`{{{ body }}}` - passing templated content into the main-layout

Variables inside engine 

layoutDir: "views/layout" - location of main template
defaultLayout: "main",  - name of main template 
extname: "hbs" - setting the name of the extensions as set in the first variable, but must be restarted here or will default to handlebars.

Package is not auto installed by express, this will have to be imported to be viewed. 

#### EJS

EJS has a combination of functionality between Pug and Handlebars