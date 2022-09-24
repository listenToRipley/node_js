## Creating a Server with Node.js

### Importing modules 
Give the item a variable name, use require('module_name_here');
If you are going to be importing on of your own files as a module, make sure you have a relative path to that file. (./)

 - STREAMS & BUFFERS
Incoming data is sent via a stream. A stream is an on going process and allows requests to be broken up in to smaller sections. In order to really process this information in a way the can be save/run/viewed in these smaller sections, you use a buffer. It's a way for the information to "stop" and extract information before "released" out into a fulled parsed page. 