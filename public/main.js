$(document).ready(function() {

  // make the mistake of specifying localhost here, without specifying production
  // details
  
  var socket = io.connect(SOCKETIO_CONNECTION);
                                                                                                      
  socket.on("message", function(data) {                                                                     
    if (data.message) {
      $(".messages").prepend("<tr>" + "<td>" + data.user + "</td><td>" + data.message +  "</td></tr>");
    }
  });

  $(".form-submit").on("click", function(ev) {
    ev.preventDefault();

    console.log("form submit clicked");
    socket.emit("send", {
      user: $(".name-input").val()
    , message: $(".message-input").val()
    });

    return false;
  });
});
