// run the following function when 'button' is clicked
$('button').click(function() {
    // apply 'slideToggle(msec)' to the 'siblings' named 'div' of the class 'expanded' in 'this' document
    $(this).toggleClass('expanded').siblings('div').slideToggle(400);
});


