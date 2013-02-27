2013-02-26 / 0.1.1
------------------
* Now allows you to hit `^C` twice for a non-clean exit.
* Does not restart the process if it restarts more than 5 times in 10 seconds.
* On death of child process, it delays 250 ms before starting it again.


2013-01-07 / 0.1.0
-------------------
* convert asciidoc readme to markdown
* deleted coffeescript dependency / rewrote in js
* buzz now sends `sigterm` signal so that child process can cleanup
* buzz captures kill/term singals so it can cleanup


along time ago / 0.0.5
-----------------------
