window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-70px";
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

    $(document).ready(function(){
      // Add smooth scrolling to all links
      $("a").on('click', function(event) {
    
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
    
          // Store hash
          var hash = this.hash;
    
          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
    
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });
    });


    WebDriverWait; wait = new WebDriverWait(driver, 20);
By; addItem = By.xpath("//input[.='Add Item']");

// get the "Add Item" element //
WebElement; element = wait.until(ExpectedConditions.presenceOfElementLocated(addItem));

//trigger the reaload of the page //
driver.findElement(By.id("...")).click();

// wait the element "Add Item" to become stale //
wait.until(ExpectedConditions.stalenessOf(element));

// click on "Add Item" once the page is reloaded
wait.until(ExpectedConditions.presenceOfElementLocated(addItem)).click();