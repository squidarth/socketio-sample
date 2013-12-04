$(document).ready(function() {

  // make the mistake of specifying localhost here, without specifying production
  // details

  var channelName = null;

  var socket = io.connect(SOCKETIO_CONNECTION);

  socket.on("message", function(data) {
    if (data.message) {
      $(".messages").prepend("<tr>" + "<td>" + 
         data.user + "</td><td>" + data.message +  "</td></tr>");
    }
  });

  $(".message-form .form-submit").on("click", function(ev) {
    ev.preventDefault();

    console.log("form submit clicked");
    socket.emit("send", {
      channel: channelName
    , user: $(".name-input").val()
    , message: $(".message-input").val()
    });

    return false;
  });

  $(".channel-selector .form-submit").on("click", function(ev) {
    ev.preventDefault();
   
    channelName = $(".channel-input").val(); 
  
    socket.emit('subscribe', channelName); 
    $(".room-name").text(channelName); 

    $(".channel-selector").hide();
    return false;
  }); 
  
  });
