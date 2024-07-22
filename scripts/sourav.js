$(document).ready(function () {
    $('.dropdown-submenu').hover(function () {
        var $submenu = $(this).children('.dropdown-menu');
        var submenuOffset = $submenu.offset();
        var spaceOnRight = $(window).width() - (submenuOffset.left + $submenu.width());
        var spaceOnLeft = submenuOffset.left;

        if (spaceOnRight < 20 && spaceOnLeft > 20) {
            $submenu.addClass('dropdown-submenu-left');
        } else {
            $submenu.removeClass('dropdown-submenu-left');
        }

        $submenu.stop(true, true).delay(200).fadeIn(200);
    }, function () {
        $(this).children('.dropdown-menu').stop(true, true).delay(200).fadeOut(200);
    });

    $('.dropdown-submenu a.dropdown-toggle').on("click", function (e) {
        var $submenu = $(this).next('.dropdown-menu');
        var submenuOffset = $submenu.offset();
        var spaceOnRight = $(window).width() - (submenuOffset.left + $submenu.width());
        var spaceOnLeft = submenuOffset.left;

        if (spaceOnRight < 20 && spaceOnLeft > 20) {
            $submenu.addClass('dropdown-submenu-left');
        } else {
            $submenu.removeClass('dropdown-submenu-left');
        }

        $submenu.toggle();
        e.stopPropagation();
        e.preventDefault();
    });

    $(document).on('click', function (e) {
        $('.dropdown-submenu .dropdown-menu').fadeOut(200);
    });
});


// Function to close the navbar when a link is clicked
function closeNavbar() {
    $('.navbar-collapse').collapse('hide');
    $('.dropdown-submenu .dropdown-menu').hide(); // Close nested dropdowns
}

// Function to close the sub-navbar when a link is clicked
function closeSubNavbar() {
    $('.dropdown-submenu .dropdown-menu').hide(); // Close nested dropdowns
}