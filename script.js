var main_url = "https://icon.horse/icon/";

const input = document.getElementById("input");
const submit = document.getElementById("submit");

submit.addEventListener("click", function() {
    event.preventDefault();
    const url = input.value;
    if (url) {
        const faviconUrl = main_url + url;
        const img = document.getElementById("favicon");
        img.src = faviconUrl;
    } else {
        alert("Please enter a URL");
    }
});