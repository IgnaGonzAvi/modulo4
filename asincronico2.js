// trabajo asincrónico 3

let inputPrincipal = document.querySelector(".input");
let botonAgregar = document.querySelector(".boton-agregar");
let contenedor =  document.querySelector(".container");

class Item{
    constructor(nuevaTarea){
        this.crearDiv(nuevaTarea)
    };

// trabajo asincrónico 4

    crearDiv(nuevaTarea){
        let inputItem = document.createElement("input");
        inputItem.disabled = true;
        inputItem.classList.add("item-input");
        inputItem.value = nuevaTarea;
        let divNuevo = document.createElement("div");
        divNuevo.classList.add("item");
        let botonEditar = document.createElement("button");
        botonEditar.innerHTML="<i class='fas fa-lock'></i>";
        botonEditar.classList.add("boton-editar");
        let botonRemover = document.createElement("button");
        botonRemover.innerHTML= "<i class='fas fa-trash'></i>";
        botonRemover.classList.add("boton-remover");
        divNuevo.appendChild(inputItem);
        divNuevo.appendChild(botonEditar);
        divNuevo.appendChild(botonRemover);
        contenedor.appendChild(divNuevo);

        // trabajo asincrónico 5

        botonEditar.addEventListener("click", function(){
            if(inputItem.disabled === true){
                botonEditar.innerHTML= "<i class='fas fa-lock-open'></i>";
                inputItem.disabled = false;
            } else {
                botonEditar.innerHTML="<i class='fas fa-lock'></i>";
                inputItem.disabled = true;
            }
        });
        botonRemover.addEventListener("click", function(){
            contenedor.removeChild(divNuevo);
            // divNuevo.removeChild(inputItem);
            // divNuevo.removeChild(botonEditar);
            // divNuevo.removeChild(botonRemover);
        });
    }
}

// trabajo asincrónico 6

function chequearInput () {
    if(inputPrincipal.value){
        let newInput = new Item(inputPrincipal.value);
        inputPrincipal.value = "";
    }
};

botonAgregar.addEventListener("click", function(){
    chequearInput();
});
