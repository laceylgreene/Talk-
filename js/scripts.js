$(document).ready(function() {
  $("button#meow").click(function() {
    $("ul").prepend("<li>Chow Meow!</li>")
    $("ul#webpage").prepend("<li>Meow Chow</li>");

  });

  $("button#bark").click(function() {
    $("ul").prepend("<li>Bork bork!</li>")
      $("ul#webpage").prepend("<li>Woof Woof</li>");;
  });

});
