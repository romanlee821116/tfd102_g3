$(document).ready(function() {
    $(".ham_container").click(function() {
       
        $(".ham_select").find("a").css({ opacity: "1" });
        $(this).toggleClass("ham_change");
        if ($(this).hasClass("ham_change")) {
            $("#ham_myNav").css({ width: "100%" });
        } else {
            $(".ham_select").find("a").css({ opacity: "0" });
          
            $("#ham_myNav").css({ width: "0%" });
        }
    })
});