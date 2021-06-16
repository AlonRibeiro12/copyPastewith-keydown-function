
function Press() {
    document.addEventListener("keydown", function (event) {
        console.log(event.key)


    });
};

function copiar() {
    let texto = document.getElementById("texto");
    texto.select();
    document.execCommand("copy");
    console.log(texto.value);


}

Press();



