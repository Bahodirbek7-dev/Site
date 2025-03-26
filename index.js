// Oʻzgaruvchilar ===========================================================================

let customersList = document.querySelector(".customers-list");  
let foodsSelect = document.querySelector("foodsSelect");  
let ordersList = document.querySelector(".orders-list");  
let clientId = document.querySelector("#clientId");  
let userHeader = document.querySelector("#userHeader");  
let userAdd = document.querySelector("#userAdd");  
let usernameInput = document.querySelector("#usernameInput");  
let telephoneInput = document.querySelector("#telephoneInput");  
let foodsForm = document.querySelector("#foodsForm");  
let foodsCount = document.querySelector("#foodsCount"); 

// ==========================================================================================





// userlarni chiqarish ======================================================================

function renderUsers() {
    customersList.innerHTML += ``
    for (let user of users){
        customersList.innerHTML += `
        <li onclick = renderOrders(${user.userId},"${user.userName}") class="customer-item">
            <span class="customer-name">${user.userName}</span>
            <a class="customer-phone" href="tel:${user.contact}">${user.contact}</a>
        </li>`
    }}

// ==========================================================================================




// maxsulotlar chiqarish ====================================================================

function renderFoods(){
    for(let food of foods){
        foodsSelect.innerHTML+=`<option value="${food.foodName}">${food.foodName}</option>`
    }
}

// ==========================================================================================




// bosilgan user buyurtmalari ================================================================

function renderOrders(id,name){
    clientId.innerHTML = id
    userHeader.innerHTML= name
    ordersList.innerHTML = null
    let order = orders.filter(or=>or.userId == id)
    for(let el of order){
        let food = foods.find(f=>f.foodId= el.foodId)
        console.log(food);
        ordersList.innerHTML += `
        <li class="order-item">
            <img src="${food.foodImg}">
            <div>
                <span class="order-name">${food.foodName}</span>
                <span class="order-count">${el.count}</span>
            </div>
        </li>
        `
        
    }

}

//============================================================================================
// function addUser(event){
//     event.preventDefaut()
//     let username = usernameInput.value.trim()
//     let contact = telephoneInput.value.trim()

//     let newUser = { 
//         userId: users.length?users.at(-1)+1:1,
//         userName : username,
//         contact

//     }
//     users.push(newUser)
//     console.log("Salom");
    
// }

function addOrders(){}

 













// tekshirish ================================================================================
renderUsers()
renderFoods()
// userAdd.addEventListener("submit",addUser)