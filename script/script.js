/* Optional Javascript to close the radio button version by clicking it again for Accordion */
var myRadios = document.getElementsByName('tabs2');
var setCheck;
var x = 0;
for (x = 0; x < myRadios.length; x++) {
    myRadios[x].onclick = function () {
        if (setCheck != this) {
            setCheck = this;
        } else {
            this.checked = false;
            setCheck = null;
        }
    };
}
let modal = document.getElementById('modal');
let modal_con = document.getElementById('modal-container');

function modalCall() {
    modal_con.style.display = 'block';
    modal.style.display = 'block';
    document.body.style.overflow = "hidden";

}
function modalClose() {
    modal.style.display = 'none';
    modal_con.style.display = 'none';
    document.body.style.overflow = "visible";
}