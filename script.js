$(document).ready(function() {
    $(".tab a:first-child").addClass("active-btn");
    $(".tabcontent:first").addClass("show");
    $('.tab a').on('click', function() {
        $('.tab a').removeClass('active-btn');
        $(this).addClass('active-btn');

        $('.tabcontent').removeClass('show');
        var tab_id = $(this).attr('href');
        $(tab_id).addClass('show');
        console.log(tab_id);
        return false;
    });
});
$(document).ready(function() {
    'use strict';

    var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
    $('.nav a').each(function() {
        if (this.href === path) {

            $(this).addClass('activebar');


        }
    });
    $(window).scroll(function() {

        if ($(this).scrollTop()) {
            $('nav').addClass('active');



        } else {
            $('nav').removeClass('active');


        }
    });
    $('.navbar-nav li a').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });
    $('.logo').on('click', function() {
        $('.navbar-collapse').collapse('hide');

    });
});


$(document).ready(function() {
    $.validator.addMethod("lettersonly", function(value, element) {
        return this.optional(element) || /^[a-z\-.,()'"\s]+$/i.test(value);
    });
    $("#form-id").validate({
        rules: {
            fname: {
                required: true,
                minlength: 3,
                lettersonly: true
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true,
                minlength: 3,
                maxlength: 300
            }
        },
        messages: {
            fname: "Please enter valid name with at least 3 characters",
            email: "Please provide a valid email",
            message: "Please enter at least 3 characters"
        },
        submitHandler: function(form) {
            form.submit();
        }
    });
});
$(document).ready(function() {
    $('.carousel').carousel({
        interval: 2000,
        pause: false,
    });

});