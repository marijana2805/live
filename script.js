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


