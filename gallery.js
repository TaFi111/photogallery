var allImages = [
    { 
        src: "img/1.jpg", 
        alt: "Myself wearing a white t-shirt and light trousers sitting on a sofa in front of a blue decorative shelf" 
    },
    { 
        src: "img/2.jpg", 
        alt: "Me wearing sunglasses and a black t-shirt posing by the riverfront with the Shanghai skyline in the background" 
    },
    { 
        src: "img/3.jpg", 
        alt: "Low-angle shot of myself looking up between towering modern glass skyscrapers" 
    },
    { 
        src: "img/4.jpg", 
        alt: "Myself posing in front of a historic European-style postal building with a grand clock tower" 
    },
    { 
        src: "img/5.jpg", 
        alt: "Back view of me standing at a viewpoint overlooking lush green trees and high-rise city buildings" 
    },
    { 
        src: "img/6.jpg", 
        alt: "Myself sitting by a wooden window holding a drink and looking out at green garden foliage" 
    },
    { 
        src: "img/7.jpg", 
        alt: "Me wearing sunglasses and a light jacket standing by an ornate pagoda wall at a Thai temple" 
    },
    { 
        src: "img/8.jpg", 
        alt: "Selfie of myself wearing a traditional vibrant blue long tunic outside a classic building" 
    },
    { 
        src: "img/9.jpg", 
        alt: "Low-angle dynamic perspective of me wearing a blue tunic reaching my hand toward the camera" 
    },
    { 
        src: "img/10.jpg", 
        alt: "Close-up childhood photo of myself as a young boy looking directly at the camera" 
    }
];

function upDate(previewPic) {
    console.log("upDate triggered for: ", previewPic.alt);
    var imageDiv = document.getElementById("image");
    imageDiv.innerHTML = previewPic.alt;
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
    var imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Hover or tab over an image below to display here.";
}

function initializeGallery() {
    console.log("Page loaded");

    var shuffled = allImages.slice();
    for (var i = shuffled.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = shuffled[i];
        shuffled[i] = shuffled[j];
        shuffled[j] = temp;
    }

    var selectedImages = shuffled.slice(0, 6);
    var galleryContainer = document.querySelector(".gallery-container");
    galleryContainer.innerHTML = "";

    for (var i = 0; i < selectedImages.length; i++) {
        var img = document.createElement("img");
        img.className = "preview";
        img.src = selectedImages[i].src;
        img.alt = selectedImages[i].alt;

        img.onmouseover = function() { upDate(this); };
        img.onmouseleave = function() { unDo(); };
        img.onfocus = function() { upDate(this); };
        img.onblur = function() { unDo(); };

        galleryContainer.appendChild(img);
    }

    var previews = document.querySelectorAll(".preview");
    for (var k = 0; k < previews.length; k++) {
        previews[k].setAttribute("tabindex", "0");
        console.log("tabindex added: " + k);
    }
}