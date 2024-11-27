
// // second page

// const products = {
//     "Pizza": {
//         image: "pizza.png",
//         cost: "₹120"
//     },
//     "Browine": {
//         image: "Browine.png",
//         cost: "₹80"
//     },
//     "Icecream": {
//         image: "Icecream.png",
//         cost: "₹80"
//     },
//     "Burger": {
//         image: "Burger.png",
//         cost: "₹140"
//     },
//     "Pasta": {
//         image: "Pasta.png",
//         cost: "₹160"
//     },
//     "Vegroll": {
//         image: "Vegroll.png",
//         cost: "₹80"
//     },
//     "Noodles": {
//         image: "noodles.png",
//         cost: "₹60"
//     },
//     "Juice": {
//         image: "juice.png",
//         cost: "₹80"
//     },
//     "Milkshake": {
//         image: "milkshake.png",
//         cost: "₹100"
//     },
//     "Friedrice": {
//         image: "friedrice.png",
//         cost: "₹75"
//     },
    
    
   
   
// };

// Function to display the product image and cost
function displayProduct() {
    const productInput = document.getElementById("productInput").value;
    const productDisplay = document.getElementById("productDisplay");

    if (products[productInput]) {
        const product = products[productInput];
        productDisplay.innerHTML = `
            <img src="${product.image}" alt="${productInput}">
            <div class="product-info">
                <h2>${productInput}</h2>
                <p>Cost: ${product.cost}</p>
            </div>
        `;
    } else {
        productDisplay.innerHTML = `<p>Dish not available. Please try again.</p>`;
    }
}

// thirdpage

const ratingEls = document.querySelectorAll(".rating");
const btnEl = document.getElementById("btn");

const container1El = document.getElementById("container");

let selectedRating = "";

ratingEls.forEach((ratingEl) => {
  ratingEl.addEventListener("click", (event) => {
    removeActive();
    selectedRating =
      event.target.innerText || event.target.parentNode.innerText;
    event.target.classList.add("active");
    event.target.parentNode.classList.add("active");
  });
});

btnEl.addEventListener("click", () => {
  if (selectedRating !== "") {
    container1El.innerHTML = `
        <strong>Thank you!</strong>
        <br>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support.</p>
        `;
  }
});

function removeActive() {
  ratingEls.forEach((ratingEl) => {
    ratingEl.classList.remove("active");
  });
}
