const navBar=document.querySelector('nav')
const allProducts = [

{
  proName: "Fried Chicken",
  proCat: "Chicken",
  proPrice: 20.00,
  proAmount: 1,
  isSuper: true,
  proImg: "./assets/images/chicken-1.png"
},

{
  proName: "Grilled Chicken",
  proCat: "Chicken",
  proPrice: 25.00,
  proAmount: 1,
  isSuper: false,
  proImg: "./assets/images/chicken-2.png"
},

{
  proName: "Spicy Chicken",
  proCat: "Chicken",
  proPrice: 22.00,
  proAmount: 1,
  isSuper: false,
  proImg: "./assets/images/chickin-3.jpg"
},

{
  proName: "BBQ Chicken",
  proCat: "Chicken",
  proPrice: 24.00,
  proAmount: 1,
  isSuper: true,
  proImg: "./assets/images/chickin-4.jpg"
},

{
  proName: "Hot Chicken",
  proCat: "Chicken",
  proPrice: 23.00,
  proAmount: 1,
  isSuper: false,
  proImg: "./assets/images/chickin-5.jpeg"
},

{
  proName: "Classic Burger",
  proCat: "Burger",
  proPrice: 12.00,
  proAmount: 1,
  isSuper: false,
  proImg: "./assets/images/burger-1.png"
},

{
  proName: "Double Burger",
  proCat: "Burger",
  proPrice: 15.00,
  proAmount: 1,
  isSuper: true,
  proImg: "./assets/images/burger-2.png"
},

{
  proName: "Cheese Burger",
  proCat: "Burger",
  proPrice: 13.50,
  proAmount: 1,
  isSuper: false,
  proImg: "./assets/images/burger-3.png"
},

{
  proName: "Special Burger",
  proCat: "Burger",
  proPrice: 17.00,
  proAmount: 1,
  isSuper: true,
  proImg: "./assets/images/burger-4.png"
},

{
  proName: "Margherita Pizza",
  proCat: "Pizza",
  proPrice: 18.00,
  proAmount: 1,
  isSuper: false,
  proImg: "./assets/images/pizza-1.jpeg"
},

{
  proName: "Pepperoni Pizza",
  proCat: "Pizza",
  proPrice: 19.50,
  proAmount: 1,
  isSuper: true,
  proImg: "./assets/images/pizza-2.jpg"
},

{
  proName: "Chicken Pizza",
  proCat: "Pizza",
  proPrice: 21.00,
  proAmount: 1,
  isSuper: false,
  proImg: "./assets/images/pizza-3.jpg"
},

{
  proName: "BBQ Pizza",
  proCat: "Pizza",
  proPrice: 22.00,
  proAmount: 1,
  isSuper: true,
  proImg: "./assets/images/pizza-4.png"
},

{
  proName: "Special Pizza",
  proCat: "Pizza",
  proPrice: 23.00,
  proAmount: 1,
  isSuper: false,
  proImg: "./assets/images/pizza-5.png"
},

{
  proName: "Hot Chicken",
  proCat: "Chicken",
  proPrice: 23.00,
  proAmount: 1,
  isSuper: false,
  proImg: "./assets/images/chickin-5.jpeg"
}

];

document.addEventListener('scroll', ()=>{
if(scrollY>600) {
  navBar.classList.add('active')
}
else{
  navBar.classList.remove('active')
}
})
const container = document.querySelector(".productsCards");
const body= document.querySelector('body')
body.style.backgroundColor='black'
body.style.height='auto'
// let cartItems=[]// global state
let cartItems=JSON.parse(localStorage.getItem('cartItems'))|| []
function addToCart(index){
    cartItems.push(allProducts[index])
    
    displayCartItems()
}


allProducts.forEach((value,index)=>{
    container.innerHTML+=`
     <div class="card">
       <div class="head">
         <img src="${value.proImg}" alt="${value.proName}">
       </div>

       <div class="inhalt">
         <h2>${value.proName}</h2>
         <div class="price">
           ${value.proPrice.toFixed(2)}
         </div>
       </div>

       <button class="btn" onclick="addToCart(${index})">
         Add to cart
       </button>
     </div>
   `;
})




const closeCartButton=document.querySelector('.cart .closeCart')
const cart=document.querySelector('.cart')
const cartIcon=document.querySelector('.cartIcon')
const cartMessage=document.querySelector('.cartMessage')

cartIcon.addEventListener('click', () => {
  cart.classList.add('active');
  cartIcon.classList.add('unvisible')
});

closeCartButton.addEventListener('click', () => {
  cart.classList.remove('active');
  cartIcon.classList.remove('unvisible')

});

const items=document.querySelector('.cart .items')
console.log(cartItems)


function displayCartItems() {
    let fillItem = '';
    let totalPrice=0

    if (cartItems.length == 0) {
        cartMessage.style.display = 'block';
    } else {
        cartItems.forEach((value, index) => {
            totalPrice+=value.proPrice *value.proAmount
            fillItem += `
                <div class="item">
                    <img src="${value.proImg}" alt="">
                    
                    <div class="item-info">
                        <h3>${value.proName}</h3>
                        <span>$${value.proPrice.toFixed(2)}</span>
                    </div>

                    <div class="item-action">
                        <button class="plus" onclick="handleAmount(${index}, 'plus')">+</button>
                         <span>${value.proAmount}</span>
                        
                        <button class="minus"onclick="handleAmount(${index}, 'minus')">-</button>
                    </div>
                    <button class="deleteItem" onclick="deleteProduct(${index})"><i class="fa-regular fa-trash-can"></i></button>
                    
                </div>
            `;
        });

        cartMessage.style.display = 'none';
    }

    items.innerHTML = fillItem;
    total.innerHTML=`$${totalPrice.toFixed(2)}`
    localStorage.setItem('cartItems',JSON.stringify(cartItems))
}

const deleteItem=document.querySelector('deleteItem')

// deleteItem.addEventListener('click', ()=>{
//     items.splice
// })

const total=document.querySelector('.total span:nth-of-type(2)')

function deleteProduct(e){
    cartItems.splice(e,1)
    displayCartItems()
}

function handleAmount(index, action){
    // console.log(index,action);
    if(action=='plus'){
       ++ cartItems[index].proAmount
    }
    else{
        if(cartItems[index].proAmount==1){
            cartItems[index].proAmount=1
        }else{

            -- cartItems[index].proAmount
        }
    }
    displayCartItems()
}