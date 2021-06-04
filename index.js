document.body.querySelector(".saved-container").style.display = "none";
document.body.querySelector(".search-container").style.display = "none";
document.body.querySelector(".preferences-container").style.display = "none";

function openHome() {
    document.body.querySelector(".saved-container").style.display = "none";
    document.body.querySelector(".search-container").style.display = "none";
    document.body.querySelector(".preferences-container").style.display = "none";
    document.body.querySelector(".scrollable-feed-container").style.display = "flex";
}

function openSaved() {
    document.body.querySelector(".scrollable-feed-container").style.display = "none";
    document.body.querySelector(".search-container").style.display = "none";
    document.body.querySelector(".preferences-container").style.display = "none";
    document.body.querySelector(".saved-container").style.display = "flex";
}

function openSearch() {
    document.body.querySelector(".scrollable-feed-container").style.display = "none";
    document.body.querySelector(".saved-container").style.display = "none";
    document.body.querySelector(".preferences-container").style.display = "none";
    document.body.querySelector(".search-container").style.display = "flex";
}

function openPreferences() {
    document.body.querySelector(".scrollable-feed-container").style.display = "none";
    document.body.querySelector(".saved-container").style.display = "none";
    document.body.querySelector(".search-container").style.display = "none";
    document.body.querySelector(".preferences-container").style.display = "flex";
}

document.body.querySelector(".bookmark").addEventListener("click", openSaved, true);

document.body.querySelector(".home").addEventListener("click", openHome, true);

document.body.querySelector(".magnifier").addEventListener("click", openSearch, true);

document.body.querySelector(".gear").addEventListener("click", openPreferences, true);