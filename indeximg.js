// Loads and writes  OR deletes two images with below properties 
// if the width property is or is not true

function addRemoveImage(x) {
    if (mql.matches) {
        let myImage = new Image
        myImage.src = "images/float5.png"
        document.id = body1.appendChild(myImage)
        myImage.setAttribute("id", "image")

        let myImage2 = new Image
        myImage2.src = "images/float5.png"
        document.id = body1.appendChild(myImage2)
        myImage2.setAttribute("id", "image2")

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