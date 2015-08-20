(function (global) {
  'use strict';

  var headerHeights = {};

  var closeToc = function() {
    $(".toc-wrapper").removeClass('open');
    $("#nav-button").removeClass('open');
  };

  var recacheHeights = function() {
    headerHeights = {};
    // TODO deal with duplicate IDs

    $("h1, h2, h3").each(function() {
      headerHeights[$(this).attr('id')] = $(this).offset().top;
    });
  };

  var refreshToc = function() {
    $(".toc .active").removeClass("active");
    $(".toc .open").removeClass("open");

    var currentTop = $(document).scrollTop();

    var best = null;
    for (var name in headerHeights) {
      if (headerHeights[name] < currentTop + 20 && (headerHeights[name] > headerHeights[best] || best === null)) {
        best = name;
      }
    }

    var target = $(".toc a[href='#" + best + "']");
    console.log("new target " + best);

    target.addClass("active").parentsUntil('.toc', 'li').addClass("open");
  };

  var makeToc = function() {
    recacheHeights();

    $("#nav-button").click(function() {
      $(".toc-wrapper").toggleClass('open');
      $("#nav-button").toggleClass('open');
      return false;
    });

    $(".page-wrapper").click(closeToc);
    $(".toc-item").click(closeToc);
  };

  $(makeToc);

  global.onscroll = refreshToc;
  global.recacheHeights = recacheHeights;

})(window);

