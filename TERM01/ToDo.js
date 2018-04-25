var modal;

// AddToDo 클릭시 modalopen
function openModal() {
    modal= document.getElementById("MyModal");
    modal.style.display = 'block';
}

// x표 누를시 modalclose
function closeModal() {
    modal.style.display = 'none';
}

function add(){
  closeModal();
}
/*
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}*/
