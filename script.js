document.querySelectorAll('.top').forEach(item => {
    item.addEventListener('click', event => {
        let clickedElement = event.target;
        let element = clickedElement.parentElement.nextElementSibling;

        if(element.style.display === "none"){
            element.style.display="block";
            clickedElement.innerText="-";
        }else{
            element.style.display="none";
            clickedElement.innerText="+";
        }
    })
})
/*document.getElementsByClassName("operator").onclick = function () {myFunction()};
document.getElementById("demo").onclick = function () { myFunction()};
function myFunction() {
    if (document.getElementById("demo").style.display === "none") {
        document.getElementById("demo").style.display="block";
        document.getElementById("operator").innerText="-";
    }else{ document.getElementById("demo").style.display="none";
        document.getElementById("operator").innerText="+";
    }
}
*/

/*function myFunction() {
    document.getElementById("operator").innerText = "+";
}*/

/*function myFunction() {
    var x = document.getElementById("demo");
    var y = document.getElementById("operator");
    if (x.style.display === "none") {
        x.style.display="block";
        y.innerText="-";
    }else{ x.style.display="none";
           y.innerText="+";
    }

}*/

