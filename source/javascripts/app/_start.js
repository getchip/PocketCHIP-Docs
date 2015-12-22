$(document).ready(function () {
  var parser = document.createElement('a');
  parser.href = window.location.href;

  // If user did not request a specific page
  if (!parser.hash) {
    // Collapse all the open sub menus
    setTimeout(function () {
      $('#tocify-header0 li.tocify-focus').click();
    }, 500);
  }
});
