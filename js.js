let customersList = document.querySelector(".customers-list")  
let foodsSelect = document.querySelector("#foodsSelect")  
let ordersList = document.querySelector(".orders-list")  
let clientId = document.querySelector("#clientId")  
let userHeader = document.querySelector("#userHeader")  
let userAdd = document.querySelector("#userAdd")  
let usernameInput = document.querySelector("#usernameInput")  
let telephoneInput = document.querySelector("#telephoneInput")  
let foodsForm = document.querySelector("#foodsForm")  
let foodsCount = document.querySelector("#foodsCount")  



function renderUsers() {
    customersList.innerHTML = null
    for (let user of users){
        customersList.innerHTML += `
        <li onclick = renderOrders(${user.userId},"${user.userName}") class="customer-item">
            <span class="customer-name">${user.userName}</span>
            <a class="customer-phone" href="tel:${user.contact}">${user.contact}</a>
        </li>`
    }}


function renderFoods(){  
    for(let food of foods){  
        foodsSelect.innerHTML += `<option value="${food.foodName}">${food.foodName}</option>`  
    }  
}


function renderOrders(id,name){  
    clientId.textContent = id  
    userHeader.innerHTML= name 
    ordersList.innerHTML = null
    let order = orders.filter(or => or.userId == id)  

    for(let el of order){  
        let food = foods.find(f => f.foodId == el.foodId)  
        ordersList.innerHTML += `<li class="order-item">  
            <img src="${food.foodImg}">  
            <div>  
                <span class="order-name">${food.foodName}</span>  
                <span class="order-count">${el.count}</span>  
            </div>  
        </li>`  
    }  
}  


function addUser(event){  
    event.preventDefault()  
    let username = usernameInput.value.trim()  
    let contact = telephoneInput.value.trim()  

    if(!username || username.length > 20){  
        return alert("Invalid username")  
    }  

    if(!(/^998(9[012345789]|3[3]|7[1]|8[8])[0-9]{7}$/).test(contact)){  
        return alert("Invalid contact")  
    }  

    let newUser = {  
        userId : users.length ? users.at(-1).userId + 1 : 1,  
        userName: username,  
        contact  
    }  

    users.push(newUser)  
    window.localStorage.setItem("users", JSON.stringify(users))  
    usernameInput.value = ""  
    telephoneInput.value = ""  
    renderUsers()  
}
function addOrders(event){  
    event.preventDefault();  
    let count = foodsCount.value.trim();  
    let foodId = foodsSelect.value;  
    let userId = clientId.textContent; 
    if (!count || count <= 0) return alert("Invalid order count");
    let newOrder = {  
        orderId : orders.length ? orders.at(-1).orderId + 1 : 1,  
        userId: +userId,  
        foodId: +foodId,  
        count: +count  
    };  
    orders.push(newOrder);  
    localStorage.setItem("orders", JSON.stringify(orders));  
    renderOrders(userId, userHeader.textContent);  
    foodsCount.value = "";  
}
renderUsers()  
renderFoods()  

userAdd.addEventListener("submit", addUser)  
foodsForm.addEventListener("submit", addOrders)  