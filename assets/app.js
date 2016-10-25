console.log ("app.js connected");

$(document).ready(function (){
  $("#session-status").append('<li>Log In</li><li style="display:none">Log Out</li>');
  $("#session-status").click(function(){
    $('li', this).toggle();
  });
});
