Buzz
=====================

A Node.js Command Line Program to Keep Your App Running Indefinitely; Like the Program Forever

It's much simpler than Forever. Approximately 100 lines of JavaScript code.
It displays your apps output to STDOUT and also displays any of your apps
STDERR output in red.



Why?
----

I have a command line app that is nasty to debug. It's working fine for the first 
five minutes or so and then it crashes. Thus, Buzz was born.

But really, it's utility is that it's a much simpler Forever.

The name comes from Buzz Lightyear in the movie Toy Story. His popular phrase was: To infinity and beyond!


Install
------

Install it via npm:

    npm install -g buzz


Usage
-----


    Usage: buzz [options] cmd args

    Options:

      -h, --help          output usage information
      -V, --version       output the version number
      -t, --time [time]   Kill program after time in (seconds).
      -d, --delay [time]  Restart program after delay in (seconds).

    Examples:

      $ buzz -t 3600 your-long-running-script.sh --input-file records.txt



License
-------

(The MIT License)

Copyright (c) 2011-2013 JP Richardson

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files 
(the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify,
 merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE 
WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS 
OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


