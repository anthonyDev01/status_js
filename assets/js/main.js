const toastContent = document.getElementById("toast-content");

const successMsg =
    ' <i class="fa-solid fa-circle-check"></i> Enviado com sucesso';

const errorMsg =
    '<i class="fa-solid fa-circle-xmark"></i> Por favor arrume o erro!';
const invalidMsg =
    '<i class="fa-solid fa-circle-exclamation"></i> Entrada inválida, verifique novamente';

function showToast(msg) {
    let toast = document.createElement("div");

    toast.classList.add("toast");
    toast.innerHTML = msg;
    toastContent.appendChild(toast);

    if (msg.includes("error")) {
        toast.classList.add("error");
    }
    if (msg.includes("Invalid")) {
        toast.classList.add("invalid");
    }
    setTimeout(() => {
        toast.remove();
    }, 6000);
}
