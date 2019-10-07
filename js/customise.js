Reveal.addEventListener("fragmentshown", function(event) {
    if (event.fragment.id === "spruce-shrink-fragment") {
        document.getElementById("spruce-shrink-img").classList.add("shrink");
    }
});

Reveal.addEventListener("fragmenthidden", function(event) {
    if (event.fragment.id === "spruce-shrink-fragment") {
        document.getElementById("spruce-shrink-img").classList.remove("shrink");
    }
});
