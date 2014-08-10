walkabout
=========

<p>"Hello World" for a virtual world using Three.js</p>

<p>This mashup is a heavily modified tps from Yomotsu's example linked at the Threejs.org wiki.
In it, you 'll find javascript using Three.js to create:

<ul>
<li>Skybox</li>
<li>Heightmap terrain</li>
<li>Very simple water mesh</li>
<li>Character walk on uneven terrain using a Raycaster</li>
<li>Character manipulation with both mouse/keyboard and touch for phones/tablets</li>
<li>Multiplayer through a Websocket server</li>
</ul>

Each of the components was created using code from others' examples, the sources are cited in
the source code.</p>

<p>You can simply load index.html in your browser and walk about the island by yourself, but the real
fun is in putting it on an accessible web server and running server.js with the appropriate URLs
inserted in both index.html and server.js.  There is a variable in index.html called multiplayer
that is currently set to false, which just loads the world with a single player, no server connection.
Change it to true and the script will prompt you for a name, then connect to the specified server.
The key command synopsis is replaced by the connection state.</p>

<p>Of Note:
<ul>
<li>Heightmap terrain handling is currently hard-coded for 128x128 grayscale images</li>
<li>Normalized the mousewheel event, works consistently in both Firefox and Chrome browsers.</li>
<li>There's an undocumented command, the "t" key, which will transport you instantaneously to the 
highest point on the terrain.</li>
<li>Another undocumented command, "x", toggles the server connection.</li>
<li>Touch interface is limited, and right now only works properly in landscape. Touch-drag rotates the 
camera around the character. If you start your touch at the bottom of the screen, the character walks 
in the direction the camera is facing.  The only browser I've been completely successful with on my
phone was Google's Chrome Beta, and at this writing you have to manually enable WebGL.</li>
<li>On steep terrain,  you'll notice that your character's feet are occasionally below the terrain 
surface.  It's 'hello world', not Second Life, so learn to love it, or send me a patch to improve
it. :)</li>
<li>Included in the tree is a node.js server, requires node.js, as well as the websocket library 
(npm install ws).  I have a C++/libwebsockets server that is posted in a separate repository, lws-server.</li>
</ul>


<p>While I intend to make minor changes, I'm not going to engage in an extensive issues/bug tracking
campaign to turn it into a full-featured application.  Rather, I encourage folks to fork the project 
and do their own world, or just copy/paste and have fun with it.</p>
