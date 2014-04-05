
var clients = new Array();
var lastmessage = new Object();
var index = 0;

var WebSocketServer = require('ws').Server, wss = new WebSocketServer({port: 8080});
wss.on('connection', function(ws) {
  clients.push(ws);
  var name;
  var me = index;
  index++;
  for (var m in lastmessage) {
    ws.send(lastmessage[m]);
  }
                
  console.log('connection');
  ws.on('message', function(message) {
    if (!name) {
      obj = JSON.parse(message);
      name = obj.name;
    }
    //console.log('received: %s', message);
    lastmessage[obj.name] = message;
    clients.forEach( function (client) {
      if (client.readyState === 1) client.send(message);
    });
  });
  ws.on('close', function() {
    clients.splice(me,1);
    index--;
    if (name) {
      delete lastmessage[name];
      var msg = { "delete": name };
      clients.forEach( function (client) {
        if (client.readyState === 1) client.send(JSON.stringify(msg));    
      });
    }
    console.log('disconnected');
  });
});
