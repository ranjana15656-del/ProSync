document.addEventListener("DOMContentLoaded", function () {

    const page = window.location.pathname.split("/").pop() || "index.html";

    const params = new URLSearchParams(window.location.search);
    const career = params.get("career") || "Career Exploration";

    function go(file, keepCareer = false) {
        if (keepCareer) {
            window.location.href =
                file + "?career=" + encodeURIComponent(career);
        } else {
            window.location.href = file;
        }
    }

    function buttonsWithText(text) {
        return [...document.querySelectorAll("button")].filter(btn =>
            btn.textContent.trim().toLowerCase().includes(text.toLowerCase())
        );
    }


    /* =========================
       PAGE 1 — SIGN IN
    ========================= */

    if (page === "index.html" || page === "") {

        buttonsWithText("sign in").forEach(btn => {
            btn.onclick = function () {
                go("profile.html");
            };
        });

        buttonsWithText("create a new account").forEach(btn => {
            btn.onclick = function () {
                go("signup.html");
            };
        });
    }


    /* =========================
       PAGE 2 — SIGN UP
    ========================= */

    if (page === "signup.html") {

        buttonsWithText("create account").forEach(btn => {
            btn.onclick = function () {
                go("profile.html");
            };
        });

        buttonsWithText("sign in").forEach(btn => {
            btn.onclick = function () {
                go("index.html");
            };
        });
    }


    /* =========================
       PAGE 3 — PROFILE
    ========================= */

    if (page === "profile.html") {

        buttonsWithText("continue").forEach(btn => {
            btn.onclick = function () {
                go("explore.html");
            };
        });
    }


    /* =========================
       PAGE 4 — EXPLORE
    ========================= */

    if (page === "explore.html") {

        buttonsWithText("continue").forEach(btn => {
            btn.onclick = function () {
                go("ai-discovery.html");
            };
        });
    }


    /* =========================
       PAGE 5 — AI DISCOVERY
    ========================= */

    if (page === "ai-discovery.html") {

        buttonsWithText("discover my career options").forEach(btn => {
            btn.onclick = function () {
                go("career-suggestions.html");
            };
        });
    }


    /* =========================
       PAGE 6 — CAREER SUGGESTIONS
    ========================= */

    if (page === "career-suggestions.html") {

        const careerButtons = buttonsWithText("explore career");

        careerButtons.forEach(btn => {

            btn.onclick = function () {

                const card = btn.closest(".career-card");

                let selectedCareer = "Career Exploration";

                if (card) {
                    const title = card.querySelector("h3");

                    if (title) {
                        selectedCareer = title.textContent.trim();
                    }
                }

                window.location.href =
                    "career-explorer.html?career=" +
                    encodeURIComponent(selectedCareer);
            };

        });
    }


    /* =========================
       PAGE 7 — CAREER EXPLORER
    ========================= */

    if (page === "career-explorer.html") {

        buttonsWithText("explore my skill gap").forEach(btn => {

            btn.onclick = function () {
                go("skill-gap.html", true);
            };

        });
    }


    /* =========================
       PAGE 8 — SKILL GAP
    ========================= */

    if (page === "skill-gap.html") {

        buttonsWithText("explore learning").forEach(btn => {

            btn.onclick = function () {
                go("learning-platforms.html", true);
            };

        });

        buttonsWithText("learning platform").forEach(btn => {

            btn.onclick = function () {
                go("learning-platforms.html", true);
            };

        });
    }


    /* =========================
       PAGE 9 — LEARNING PLATFORMS
    ========================= */

    if (page === "learning-platforms.html") {

        buttonsWithText("explore education").forEach(btn => {

            btn.onclick = function () {
                go("college-explorer.html", true);
            };

        });

        buttonsWithText("college").forEach(btn => {

            btn.onclick = function () {
                go("college-explorer.html", true);
            };

        });
    }


    /* =========================
       PAGE 10 — COLLEGE EXPLORER
    ========================= */

    if (page === "college-explorer.html") {

        buttonsWithText("roadmap").forEach(btn => {

            btn.onclick = function () {
                go("roadmap.html", true);
            };

        });

        buttonsWithText("continue").forEach(btn => {

            btn.onclick = function () {
                go("roadmap.html", true);
            };

        });
    }


    /* =========================
       PAGE 11 — ROADMAP
    ========================= */

    if (page === "roadmap.html") {

        buttonsWithText("learning journey").forEach(btn => {

            btn.onclick = function () {
                go("learning-journey.html", true);
            };

        });

        buttonsWithText("continue").forEach(btn => {

            btn.onclick = function () {
                go("learning-journey.html", true);
            };

        });
    }


    /* =========================
       PAGE 12 — LEARNING JOURNEY
    ========================= */

    if (page === "learning-journey.html") {

        buttonsWithText("portfolio").forEach(btn => {

            btn.onclick = function () {
                go("portfolio.html", true);
            };

        });

        buttonsWithText("continue").forEach(btn => {

            btn.onclick = function () {
                go("portfolio.html", true);
            };

        });
    }


    /* =========================
       PAGE 13 — PORTFOLIO
    ========================= */

    if (page === "portfolio.html") {

        buttonsWithText("career readiness").forEach(btn => {

            btn.onclick = function () {
                go("career-readiness.html", true);
            };

        });

        buttonsWithText("continue").forEach(btn => {

            btn.onclick = function () {
                go("career-readiness.html", true);
            };

        });
    }


    /* =========================
       PAGE 14 — CAREER READINESS
    ========================= */

    if (page === "career-readiness.html") {

        buttonsWithText("view my portfolio").forEach(btn => {

            btn.onclick = function () {
                go("portfolio.html", true);
            };

        });

        buttonsWithText("explore more careers").forEach(btn => {

            btn.onclick = function () {
                go("explore.html");
            };

        });
    }


    /* =========================
       SHOW CURRENT CAREER
    ========================= */

    document.querySelectorAll(
        "#careerName, .career-name, [data-career]"
    ).forEach(element => {

        if (career !== "Career Exploration") {
            element.textContent = career;
        }

    });

});