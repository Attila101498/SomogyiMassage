// Topnav - Menu
function myFunction() {
    let nav = document.getElementById("myTopnav");

    if (nav.className === "topnav") {
        nav.className += " responsive";
        nav.classList.toggle("change");
    } else {
        nav.className = "topnav";
    }
}


// Vegas container
$(document).ready(function() {
    fullscreenslider();
});

var fullscreenslider = function() {
    $("section.main-heading").vegas({
        delay: 12000,
        slides: [
            {
                src: './img/topBg.jpg',
                text: '<h1 style="font-weight: normal;">“A masszázs nem luxus. <br> Ez egy út az egészségesebb, \n\
                <br> boldogabb élethez.”</h1> <br> <a href="#kapcsolat" class="firstA">Kérj időpontot!</a>'
            }
        ], animation: 'kenburns',
        walk: function (index, slideSettings) {
            $('#vegasSliderInner').html(slideSettings.text);
        }
    });
};


// Scroll effect
$(document).ready(function() {
    $("a").on('click', function(event) {
        if (!$("a[href='#carousel']") && this.hash !== "") {
            event.preventDefault();
            let hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});


// Multi item Carousel
$('#carousel').on('slide.bs.carousel', function(e) {
    /*
        CC 2.0 License Iatek LLC 2018 - Attribution required
    */
    let $e = $(e.relatedTarget);
    let idx = $e.index();
    let itemsPerSlide = 5;
    let totalItems = $('.carousel-item').length;
    
 
    if (idx >= totalItems-(itemsPerSlide-1)) {
        let it = itemsPerSlide - (totalItems - idx);
        for (let i=0; i<it; i++) {
            if (e.direction=="left") {
                $('.carousel-item').eq(i).appendTo('.carousel-inner');
            } else {
                $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
});


// Gyakori kérdések, lenyíló ablakok
var acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

// Nyilak kicserélése
$('.accordion').click(function () {
    if ($(".chevrondown:hidden", this).length == 0) {
        $('.chevrondown', this).css({
            'display': 'none'
        });
        $('.chevronup', this).css({
            'display': 'inline'
        });
    } else if ($(".chevronup:hidden", this).length == 0) {
        $('.chevronup', this).css({
            'display': 'none'
        });
        $('.chevrondown', this).css({
            'display': 'inline'
        });
    }
});


// Email sending
$('#form').submit(function(event) {
    event.preventDefault();

    let name = $('#name').val();
    let email = $('#email').val();
    let message = $('#message').val();

    if (name && email && message) {
        $.ajax({
            type: "POST",
            url: "../mail.php",
            data: $(this).serialize(),		
            success: function() {
                document.getElementById("form").reset(); 
                $("#staticBackdrop").modal("show");
            }				
        });
    } else {
        $("#errorStaticBackdrop").modal("show");
    }
});