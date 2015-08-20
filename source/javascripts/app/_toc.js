(function (global) {
  'use strict';

  var headerHeights = {};

  // hides the TOC on mobile devices
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

    $(".toc a[href='#" + best + "']").addClass("active").parentsUntil('.toc', 'li').addClass("open");
  };

  var debounce = function(func, waitTime) {
    var timeout = false;
    return function() {
      if (timeout === false) {
        setTimeout(function() {
          func();
          timeout = false;
        }, waitTime);
        timeout = true;
      }
    };
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

    // reload immediately after scrolling on toc click
    $('.toc a').click(function() {
      setTimeout(refreshToc, 1);
    });

    $(window).scroll(debounce(refreshToc, 200));
    $(window).resize(debounce(recacheHeights, 200));
  };

  $(makeToc);

  global.recacheHeights = recacheHeights;

})(window);

