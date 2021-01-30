var modal = document.getElementById("items-modal");
var closeModal = document.getElementsByClassName("items-modal-close")[0];

function itemModal(id) {
    modal.style.display = "flex";
    var ajaxReq = new XMLHttpRequest();
    ajaxReq.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            document.getElementById("item-description").innerHTML = this.responseText;
        }
    };
    ajaxReq.open("GET", "./item-descriptions/"+id+".txt", true);
    ajaxReq.send();
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

closeModal.onclick = function() {
    modal.style.display = "none";
}
