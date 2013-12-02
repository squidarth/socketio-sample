var express = require("express")
  , app = express()
  , port = 4000;

app.set("views", __dirname + "/templates");
app.set("view engine", "ejs");
console.log(app.settings.env);
app.use(express.static(__dirname + "/public"));

app.get("/", function(request, response) {
  response.render("index.ejs", {env: app.settings.env, title: "Hello World"});
});

io = require("socket.io").listen(app.listen(port));
// build this up slowly, don't immediately start with the messages.
io.sockets.on("connection", function(socket) {
  socket.emit("message", {user: "The room", message: "Hello"});
  socket.on("send", function(data) {
    socket.emit("message", {user: data.user, message: data.message});
  });
});
