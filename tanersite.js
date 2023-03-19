$(document).ready();

var typed = new Typed(".multipleText", {
    strings: ["Full Stack Developer", "Web Designer", "Engineer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

$("#hk").click(function () {
    window.scrollTo(0, $("#hakkimd").offset().top);
});

$("#ytk").click(function () {
    window.scrollTo(0, $("#bcr").offset().top);
});
$("#prf").click(function () {
    window.scrollTo(0, $("#prfm").offset().top);
});
$("#ilt").click(function () {
    window.scrollTo(0, $("#iltm").offset().top);
});
$("#ans").click(function () {
    window.scrollTo(0, $("#hdr").offset().top);
});
$("#CV").click(function () {
    window.open("CV.pdf");
});


$("#upt").click(function () {
    window.scrollTo(0, 0);
});
$("#startpage").mouseleave(function () {
    $("#upt").fadeIn(500);
});
$("#startpage").mouseenter(function () {
    $("#upt").fadeOut(500);
});
