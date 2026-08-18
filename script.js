// =========================
// ECHO PORTFOLIO
// =========================


// Change browser title when leaving the page

document.addEventListener("visibilitychange", function () {

    if (document.hidden) {

        document.title = "Come back — Echo";

    } else {

        document.title = "Echo — Composer & Sound Designer";

    }

});