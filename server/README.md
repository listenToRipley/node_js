## Creating a Server with Node.js

### Importing modules 
Give the item a variable name, use require('module_name_here');
If you are going to be importing on of your own files as a module, make sure you have a relative path to that file. (./)

 - STREAMS & BUFFERS
Incoming data is sent via a stream. A stream is an on going process and allows requests to be broken up in to smaller sections. In order to really process this information in a way the can be save/run/viewed in these smaller sections, you use a buffer. It's a way for the information to "stop" and extract information before "released" out into a fulled parsed page. 

See req.on() for more details. 

These are executed asynchronously, so the order in which they appear may not be the order these operations are executed depending on the size of the req or res. 

Req and res are cached by node, so that is part of the reason you must restart the server on changes. The only exportable really is the readable content, not writeable. 