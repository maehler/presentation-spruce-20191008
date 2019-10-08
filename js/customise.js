Reveal.addEventListener("fragmentshown", function(event) {
    if (event.fragment.id === "spruce-shrink-fragment") {
        document.getElementById("spruce-shrink-img").classList.add("shrink");
    } else if (event.fragment.id === "spruce-shrink-fragment2") {
        document.getElementById("spruce-shrink-img2").classList.add("shrink-more");
    }
});

Reveal.addEventListener("fragmenthidden", function(event) {
    if (event.fragment.id === "spruce-shrink-fragment") {
        document.getElementById("spruce-shrink-img").classList.remove("shrink");
    } else if (event.fragment.id === "spruce-shrink-fragment2") {
        document.getElementById("spruce-shrink-img2").classList.remove("shrink-more");
    }
});
