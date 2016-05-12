jQuery(document).ready(function () {
    jQuery('.skillbar').each(function () {
        jQuery(this).find('.skillbar-bar').animate({
            width: jQuery(this).attr('data-percent')
        }, 6000);
    });

});


$(document).ready(function () {
    $('.contact').popover({
        title: "",
        content: "<form action='index.php'><div class='row'><div class=''><label for='exampleEmailInput'>Your email</label><input class='u-full-width' type='email' placeholder='example@mailbox.com' name='email' id='email'></div></div><label for='exampleMessage'>Message</label><textarea class='u-full-width' placeholder='' name='message' id='exampleMessage'></textarea><input class='button' type='submit' value='Submit'></form>",
        html: true,
        placement: "bottom"
    });
});