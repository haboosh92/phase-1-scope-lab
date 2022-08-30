
// Write your solution in this file!
var customerName = "bob";
const leastFavoriteCustomer ="III";


/*upperCaseCustomerName();
setBestCustomer();
overwriteBestCustomer();
changeLeastFavoriteCustomer();
*/

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
    return customerName;
}

function setBestCustomer(){
    bestCustomer = "not bob"; // according to w3school :If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable.
    return bestCustomer;
}

function overwriteBestCustomer(){
    bestCustomer = "maybe bob";
}

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "RRR";
}