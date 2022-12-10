const buttonElement = document.querySelector('#addTransactionButton')
const buttonBalance = document.querySelector('#checkBalanace')
const inputElementConcept = document.getElementById('concept')
const inputElementQuantity = document.getElementById('quantity')
const expenditureValue = document.getElementById("expenditure-value");
const incomeValue = document.getElementById("income-value")
const list = document.getElementById("history_list");
const listIncome = document.getElementById("history_list_income")
const balanceResult = document.getElementById("balance")

//Function To Add Expenses and Income
buttonElement.addEventListener("click", () =>{
    let expenditure = parseInt(quantity.value);
    if (quantity.value <0){
        let sum = parseInt(expenditureValue.innerText) + expenditure;
        expenditureValue.innerText = sum +' €';
    }else{
        let sum = parseInt(incomeValue.innerText) + expenditure;
        incomeValue.innerText = sum +' €';
    }
    listCreator(inputElementConcept.value, quantity.value);
    inputElementConcept.value = ""; 
    inputElementQuantity.value = "";
});


//Function To Create List of Expenses and Incomes
const listCreator = (expenseName, expenseValue) => {
    let sublistContent = document.createElement("div");
    if (quantity.value < 0) {
        sublistContent.classList.add("sublist-content");
        list.appendChild(sublistContent);
        sublistContent.innerHTML = `
        <p class="concept">${expenseName}</p>
        <p class="quantity">${expenseValue}</p>`;
        
    }else{
        sublistContent.classList.add("sublist-content-income")
        list.appendChild(sublistContent);
        sublistContent.innerHTML = `
        <h6 class="concept-income">${expenseName}</h6>
        <h6 class="quantity-income">${expenseValue}</h6>`;
    }
    const deleteButton = document.createElement("button");
    if(quantity.value >0){
        
        deleteButton.classList.add( "fa-solid", "fa-trash-can", "delete");
        deleteButton.style.color = '#2a2dff';
        deleteButton.style.fontSize = "16px";
        sublistContent.style.alignItems="center";
    }else {    
        deleteButton.classList.add( "fa-solid", "fa-trash-can", "delete");
        deleteButton.style.color = '#EB694C';
        deleteButton.style.fontSize = "16px";
        sublistContent.style.alignItems="center";
    }

    deleteButton.addEventListener("click", () => {
        list.removeChild(sublistContent);
    
    });
    

    sublistContent.appendChild(deleteButton);
    document.getElementById("history_list").appendChild(sublistContent);
  };


//Function balance
buttonElement.addEventListener("click", () =>{
    let balance  = parseInt(expenditureValue.innerText) + parseInt(incomeValue.innerText) ;
    balanceResult.innerText = balance + ' €';
})

