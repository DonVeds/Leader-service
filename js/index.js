// Get the modal
let modal = document.getElementById("myModal");
let modalBody = document.getElementById("modal-body")

// Get the button that opens the modal
let btn = document.getElementById("myBtn");
let pasInpt = document.getElementById("pasInpt");
let pasBtn = document.getElementById("pasBtn");

let sale = document.querySelector('.sale')
let saleOn = document.querySelector('.sale-on');
let saleOff = document.querySelector('.sale-off');


// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
};

pasBtn.onclick = () => {
    if (pasInpt.value === '0') modalBody.style.display = "block";
}

saleOn.onclick = () => {
    sale.style.display = "flex"
}

saleOff.onclick = () => {
    sale.style.display = "none";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
