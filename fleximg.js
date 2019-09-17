// Loads and writes  OR deletes two images with below properties 
// if the width property is or is not true

function addRemoveImage(z) {
    if (mql.matches) {
        let myImage3 = new Image
        myImage3.src = "images/flexboy.png"
        document.id = body2.appendChild(myImage3)
        myImage3.setAttribute("id", "image")

        let myImage4 = new Image
        myImage4.src = "images/flexboy.png"
        document.id = body2.appendChild(myImage4)
        myImage4.setAttribute("id", "image2")

    } else {
        const image1 = document.getElementById("image");
        const image2 = document.getElementById("image2");

        if (image1) {
            image1.remove();
        }

        if (image2) {
            image2.remove();
        }
    }
}
var mql = window.matchMedia("(min-width: 992px)")
addRemoveImage(mql) // Call listener function at run time
mql.addListener(addRemoveImage) // Attach listener function on state changes