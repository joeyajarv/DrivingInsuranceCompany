/**
*   @author Jarvenpaa, Josiah (josiahjarvenpaa@live.com)
*   @version 0.0.1
*   @summary Salary.js code || created: 09.28.2016
*   @todo
*/

"use strict";
const PROMPT = require('readline-sync');

const CURRENT_YEAR = 2016;

let continueResponse;
let numPolicyNumber, numCustomerBirthDate, numPremiumDueDateDay, numPremiumDueDateMonth, numPremiumDueDateYear, numAtFaultAccidents, numCustomerAge, totalBill;
let customerFirstName, customerLastName;

function main() {
    process.stdout.write('\x1Bc'); //Clears the screen
    if (continueResponse == null) {
        setContinueResponse();
    }
    if (continueResponse === 1) {
        setNumPolicyNumber();
        setCustomerFirstName();
        setCustomerLastName();
        setNumCustomerBirthDate();
        setNumCustomerAge();
        setNumPremiumDueDateMonth();
        setNumPremiumDueDateDay();
        setNumPremiumDueDateYear();
        setNumAtFaultAccidents();
        setTotalBill();
        printTotalBill();
        setContinueResponse();
        return main();
    }
    printGoodbye();
}

main();

function setContinueResponse() {
    if (continueResponse) {
        continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
    } else {
        continueResponse = 1;
    }
}

function setNumPolicyNumber() {
    numPolicyNumber = Math.floor((Math.random() * 10000) + 1);  //JavaScript random number 1 - 10000
}

function setCustomerFirstName() {
    customerFirstName = PROMPT.question(`\nPlease enter customer's first name: `);
}

function setCustomerLastName() {
    customerLastName = PROMPT.question(`\nPlease enter customer's last name: `);
}

function setNumCustomerBirthDate() {
    numCustomerBirthDate = Number(PROMPT.question(`\nPlease enter customer's year of birth: `));
}

function setNumCustomerAge() {
    numCustomerAge = Number(CURRENT_YEAR - numCustomerBirthDate);
}

function setNumPremiumDueDateMonth() {
    numPremiumDueDateMonth = PROMPT.question(`\nPlease enter premium due date month: `);
}

function setNumPremiumDueDateDay() {
    numPremiumDueDateDay = Number(PROMPT.question(`\nPlease enter premium due date day: `));
}

function setNumPremiumDueDateYear() {
    numPremiumDueDateYear = Number(PROMPT.question(`\nPlease enter premium due date year: `));
}

function setNumAtFaultAccidents() {
    numAtFaultAccidents = Number(PROMPT.question(`\nPlease enter customer's number of at-fault accidents: `));
}

function setTotalBill() {
    totalBill = 0;
    const BASE_PRICE = 100,
        YOUNG_DRIVER_FEE = 20,
        MIDDLE_AGE_DRIVER_FEE = 10,
        OLD_AGE_DRIVER_FEE = 30;
    if (numCustomerAge > 0) {
        if (numCustomerAge > 0 && numCustomerAge < 15) {
            totalBill = BASE_PRICE + numAtFaultAccidents * 50;
        } else if (numCustomerAge >= 15 && numCustomerAge <30) {
            totalBill = BASE_PRICE + YOUNG_DRIVER_FEE + numAtFaultAccidents * 50;
        } else if (numCustomerAge >= 30 && numCustomerAge < 45) {
            totalBill = BASE_PRICE + MIDDLE_AGE_DRIVER_FEE + numAtFaultAccidents * 50;
        } else if (numCustomerAge >= 45 && numCustomerAge < 60) {
            totalBill = BASE_PRICE + numAtFaultAccidents * 50;
        } else {
            totalBill = BASE_PRICE + OLD_AGE_DRIVER_FEE + numAtFaultAccidents * 50;
        }
    }
}

function printTotalBill() {
    process.stdout.write('\x1Bc'); //Clears the screen
    console.log(`\n\t${customerLastName}'s bill: \$${totalBill}. Customer Poilicy #: ${numPolicyNumber}`);
}

function printGoodbye() {
    process.stdout.write('\x1Bc'); //Clears the screen
    console.log(`\n\tGoodbye.`);
}

/*
 This program is designed to prompt customer for basic information about their dog, calculate the price, then output
 the total bill.
 */