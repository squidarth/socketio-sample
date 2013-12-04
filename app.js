var express = require("express")
  , app = express()
  , port = 4000;

app.set("views", __dirname + "/templates");
app.set("view engine", "ejs");
console.log(app.settings.env);
app.use(express.static(__dirname + "/public"));

app.get("/", function(request, response) {
  // here, need to do a query for the messages.
  response.render("index.ejs", {env: app.settings.env, title: "Hello World"});
});

io = require("socket.io").listen(app.listen(port));
// build this up slowly, don't immediately start with the messages.
io.sockets.on("connection", function(socket) {

  socket.on('subscribe', function(channel) {
    socket.join(channel);
  });

  socket.on("send", function(data) {
    console.log(data.channel);
    io.sockets.in(data.channel).emit("message", {user: data.user, message: data.message});
    // here, need to persist the message, with user and message 
  });
});
