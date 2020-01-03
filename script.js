function toggleNav() {
    if($("nav").css("display") == "flex"){
        $("nav").css("display", "none");
    }
    else {
        $("nav").css("display", "flex");
    }
}