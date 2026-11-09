
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

// Abrir e fechar menu
menuToggle.addEventListener("click", () => {

    const aberto = mainNav.classList.toggle("open");

    menuToggle.textContent = aberto ? "×" : "☰";

    menuToggle.setAttribute(
        "aria-expanded",
        String(aberto)
    );

    menuToggle.setAttribute(
        "aria-label",
        aberto ? "Fechar menu" : "Abrir menu"
    );

});

// Fechar menu ao selecionar uma seção
mainNav.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

        mainNav.classList.remove("open");

        menuToggle.textContent = "☰";

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});

// Fechar menu com ESC
document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        mainNav.classList.remove("open");

        menuToggle.textContent = "☰";

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    }

});
