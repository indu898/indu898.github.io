function addRemoveImage(r) {
    if (mql.matches) {
        let myImage5 = new Image
        myImage5.src = "images/gridboy.png"
        document.id = body3.appendChild(myImage5)
        myImage5.setAttribute("id", "image")

        let myImage6 = new Image
        myImage6.src = "images/gridboy.png"
        document.id = body3.appendChild(myImage6)
        myImage6.setAttribute("id", "image2")

    } else {
        try { document.getElementById("image").remove(); } catch (e) { }
        try { document.getElementById("image2").remove(); } catch (e) { }
    }
}
var mql = window.matchMedia("(min-width: 992px)")
addRemoveImage(mql) // Call listener function at run time
mql.addListener(addRemoveImage) // Attach listener function on state changes