function saveSearchEnginePreference() {
    var selectedEngine = document.getElementById("searchEngineSelect").value;
    localStorage.setItem("preferredSearchEngine", selectedEngine);
    // do something to alert user that its been saved
}

document.addEventListener("DOMContentLoaded", function () {
    var savedEngine = localStorage.getItem("preferredSearchEngine");
    if (savedEngine) {
        document.getElementById("searchEngineSelect").value = savedEngine;
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleUVEnabled");

    toggleButton.addEventListener("click", function () {
        let UVEnabled = JSON.parse(localStorage.getItem("UVEnabled")) || false;

        UVEnabled = !UVEnabled;

        toggleButton.textContent = UVEnabled
            ? "Dynamic Disabled: ON"
            : "Dynamic Disabled: OFF";

        localStorage.setItem("UVEnabled", JSON.stringify(UVEnabled));
    });

    let initialUVEnabled =
        JSON.parse(localStorage.getItem("UVEnabled")) || false;
    toggleButton.textContent = initialUVEnabled
        ? "Dynamic Disabled: ON"
        : "Dynamic Disabled: OFF";
});