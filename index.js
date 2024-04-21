#! /usr/bin/env node
import inquirer from "inquirer";
//Set your balance & pin code
let myBalance = 10000; //dollars
let myPin = 1234;
//Printing a Welcome msg for audience
console.log(`
Welcome To Fatima Khan's ATM Machine
`);
let pinAnswer = await inquirer.prompt([
    { name: "userPinNumber",
        type: "number",
        message: "Please enter your Pin Number: ", }
]);
//sirf 1234 print karnay k liye .userPinNumber use hoga pinAnswer k saath
if (pinAnswer.userPinNumber === myPin) {
    console.log(`
Congratulations, your Pin Code is correct!`);
}
else {
    console.log(`
Your Pin code is incorrect`);
    process.exit(1);
} // ; process.exit (1) stops the execution of program
let operationAnswer = await inquirer.prompt([
    {
        name: "operation",
        message: `
Please select any of the options below
`,
        type: "list", //ab kiyunke withdraw & check balance 2 options hein tu array use hoga
        choices: ["withdraw cash manually", "select the default amount", "check balance"]
    }
]);
if (operationAnswer.operation === "withdraw cash manually") {
    let amountAns = await inquirer.prompt([
        { name: "amount",
            type: "number",
            message: `
Enter your amount
                    `,
        }
    ]);
    //TASK 2 PREVENT MACHINE FROM SHOWING BALANCE IN NEGATIVE
    if (amountAns.amount > myBalance) {
        console.log("Insufficient Balance");
    }
    else {
        myBalance -= amountAns.amount; // -= se subratact kar ke de ga value
        console.log(`
Your remaining Balance is: ${myBalance}`);
    }
}
//TASK 1 MAKE A DEFAULT AMOUNT OPERATOR
if (operationAnswer.operation === "select the default amount") {
    let defaultAmount = await inquirer.prompt([
        { name: "default",
            type: "number",
            message: `
Select the default amount from the following:
[3000, 5000, 10000].
                    `,
            choices: [3000, 5000, 10000]
        }
    ]);
    myBalance -= defaultAmount.default; // -= se subratact kar ke de ga value
    console.log(`
Your remaining Balance is: ${myBalance}`);
}
//TASK 3 TEMPLATE LITERALS WITH PLACEHOLDER
else if (operationAnswer.operation === "check balance") {
    console.log(`
Your current Balance is: ${myBalance}
`);
}
console.log(`
    Thank you for using this our service
    `);
