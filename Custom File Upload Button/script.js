const fileName = document.querySelector(".fileName");

const fileInput = document.querySelector("input[type=file]");
fileInput.addEventListener("change", function() {
    if (this.files && this.files[0]) {
        fileName.innerHTML = this.files[0].name;
    }
});


