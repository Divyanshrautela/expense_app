// coding and styling done by-divyansh rautela

let expenses = [];
let totalAmount = 0;
const amountInput = document.getElementById('amount-input');
const categorySelect = document.getElementById('category-select');
const dateInput = document.getElementById('date-input');
const addBtn = document.getElementById('add-btn');
const totalAmountCell = document.getElementById('total-amount');
const expensesTableBody = document.getElementById('expnese-table-body');

addBtn.addEventListener('click', function() {
    const category = categorySelect.value;
    const amount = Number(amountInput.value);
    const date = dateInput.value;

    if (category === '') {
        alert('select a category first');
        return;
     }

    if (isNaN(amount) || amount <=0 ) {
        alert('enter a valid amount first')
        return;
    }

    if(date === '') {
        alert('select a date first')
        return;
    }
    expenses.push({category, amount, date});
    totalAmount += amount;
    totalAmountCell.textContent = totalAmount;
    const newRow = expensesTableBody.insertRow();
    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function() {
        expenses.splice(expenses.indexOf(expense), 1);
        totalAmount -= expense.amount;
        totalAmountCell.textContent = totalAmount;
        expensesTableBody.removeChild(newRow);
    });
    const expense = expenses[expenses.length - 1];
    categoryCell.textContent = expense.category;
    amountCell.textContent = expense.amount;
    dateCell.textContent = expense.date;
    deleteCell.appendChild(deleteBtn);
});

for (const expense of expenses) {
    totalAmount += expense.amount;
    totalAmountCell.textContent = totalAmount;
    
    const newRow = expensesTableBody.inserRow();
    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Cancel';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function() {
        expenses.splice(expenses.indexOf(expense), 1);

        totalAmount -= expense.amount;
        totalAmountCell.textContent = totalAmount;

        expensesTableBody.removeChild(newRow);
    });
    categoryCell.textContent = expense.category;
    amountCell.textContent = expense.amount;

    dateCell.textContent = expense.date;
    deleteCell.appendChild(deleteBtn);
}