
const header = document.querySelector("header");
const cartIcon=header.lastElementChild;
const cart = document.querySelector(".cart");
cartIcon.addEventListener("click", () => {
    console.log("click");
    cart.classList.add("show");
})

const closeCart=document.querySelector(".closeCart");
closeCart.addEventListener("click", () =>{
    console.log("click");
    cart.classList.remove("show");
})

const iconRemove=document.querySelectorAll(".delete-icon");
iconRemove.forEach(elem => {
    elem.addEventListener("click", () =>{
        console.log("Click");
        const elemParent=elem.parentElement;
        elemParent.remove();
    })
})


const buyButton = document.querySelectorAll(".buyButton");
const cartItems = document.getElementById("cart-items");
buyButton.forEach((button) => {
    button.addEventListener("click", () => {
        console.log("click en boton de comprar");
        const productArticle = button.closest('article'); 

        // Clonar el artículo para agregarlo al carrito
        const clonedProduct = productArticle.cloneNode(true); 
        
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item'); // Añadimos la clase cart-item

        // Extraemos 
        const productImage = clonedProduct.querySelector('img').src; // Obtener imagen
        const productName = clonedProduct.querySelector('h3').innerText; // nombre
        const productPrice = clonedProduct.querySelector('p').innerText; // precio

        // Estructura para el nuevo item en el carrito
        cartItem.innerHTML = `
            <img src="${productImage}" alt="${productName}">
            <p>${productName}</p>
            <p>${productPrice}</p>
            <img src="img/remover.png" alt="icono de remover" class="delete-icon">
        `;

        // Agregar el ícono de eliminación
        const deleteIcon = cartItem.querySelector('.delete-icon'); //select
        deleteIcon.addEventListener('click', () => {
            console.log("Producto eliminado del carrito");
            cartItem.remove();
        });

        cartItems.appendChild(cartItem);
    });
});

const cartLogo= document.querySelector(".cartLogo");
let cartCount=0;
const cartBadge= document.createElement("span");
cartBadge.classList.add("badge");
cartBadge.textContent = cartCount; // Inicializa con el contador, textCounter permite leer el contenido textual de un nodo 
cartLogo.parentElement.appendChild(cartBadge);

function updateCartBadge() {
    cartBadge.textContent = cartCount; 
}
const buyButtons = document.querySelectorAll(".buyButton");
buyButtons.forEach((button) => {
    button.addEventListener("click", () => {
        cartCount++; 

        updateCartBadge();

        const deleteIcons = document.querySelectorAll(".delete-icon");
        deleteIcons.forEach((icon) => {
            icon.addEventListener("click", () => {
                console.log("Producto eliminado del carrito");

                
                icon.closest('.cart-item').remove();
                if (cartCount > 0) {
                    cartCount--;
                    updateCartBadge();
                }
            });
        });
    });
});


const menu=document.querySelector(".menu");
const menuIcon=document.querySelector(".menuIcon")
menuIcon.addEventListener("click", () =>{
console.log("click menu");
menu.classList.add("showMenu")
} )

const closeMenu=document.querySelector(".closeMenu");
closeMenu.addEventListener("click", () =>{
    console.log("click close");
    menu.classList.remove("showMenu");
})
