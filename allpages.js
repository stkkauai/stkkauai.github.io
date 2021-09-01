window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-50px";
      }
    }

    $(document).ready(function () {
        var $horizontal = $('.heroheading');
        var startPosition = $horizontal.position().left;
        var speed = 14;
        $(window).scroll(function () {
            var st = $(this).scrollTop();
            var newPos = (st * (speed/100)) + startPosition;
            $horizontal.css({
                'left': newPos
            });
        });
    });