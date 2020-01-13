document.querySelectorAll('.top').forEach(item => {
    item.addEventListener('click', event => {
        let clickedElement = event.target;
        let element = clickedElement.parentElement.nextElementSibling;

        if (element.style.display === "none") {
            element.style.display = "block";
            clickedElement.innerText = "-";
        } else {
            element.style.display = "none";
            clickedElement.innerText = "+";

        }
    })
});

document.getElementById("tab").onclick = function () {
    cool()
};

function cool() {
    document.getElementById("tab")
        .innerHTML = '<input type="text" id="max"><button type="button" id="first">Click!</button>';
    document.getElementById("max").value = "Creating Elgg screenshots";
    document.getElementById("max").focus();
    document.getElementById("first").onclick = function () {
        promjena()
    };

    function promjena() {
        /*document.getElementById("tab").innerHTML = document.getElementById("max").value;*/
        document.getElementById("imaginary").innerHTML = document.getElementById("max").value;
        document.getElementById("tab").style.display = "none";
        document.getElementById("imaginary").classList.add("screen");
        if(document.getElementById("imaginary").style.display==="none"){
            document.getElementById("imaginary").style.display="block";
        }
    }
}

document.getElementById("line").onclick = function () {
    list()
};

function list() {

    if (document.getElementById("tab").style.display === "none") {
        document.getElementById("tab").style.display = "block";
        document.getElementById("imaginary").style.display="none";
    } else {
        document.getElementById("tab").style.display = "none";
    }
}