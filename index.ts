#! /usr/bin/env node

import inquirer from "inquirer"


/*
 1- Set Your current Balance & pin

 2- Print a welcome Msg

 3- Make a user prompt (by using an object) to enter pin code
    3 A) if pin is correct print congrats msg
    3 B) else print incorrect pin message & stop any further execution of code

 4- Make another user prompt (by using an object) which has three options to choose from
    [ withdraw cash manually, select the default amount, check balance ]
    
    4 A) if selected withdraw cash manually:

        a) 1)- Make a user prompt (by using an object) which says enter your amount
                if user selected more than the current balance print Insufficient balance
                else show user the remaining balance (Current balance - withdrawn amount)
             
    4 B) if selected the default amount:

        a) 1)- Make a user prompt (by using an object) which says select default amount from below: [3000, 5000, 10000]
                                   Note: {add a new parameter showing default amounts in object}
                print the remaining balance (Current balance - withdrawn amount)
                      
    4 C) if check balance is selected:
         Print the current Balance    
                       
5- Print Thanks Msg 
*/


// 1- Set your balance & pin code
let myBalance = 10000 //dollars
let myPin = 1234


// 2- Printing a Welcome msg for audience
console.log(`
Welcome To Fatima Khan's ATM Machine
`)


// 3- Prompt to enter pin code
let pinAnswer = await inquirer.prompt(
    [
        {name: "userPinNumber",
        type: "number",
        message: "Please enter your Pin Number: ",}
    ]
)     
         
    // 3 A) if pin is correct print congrats msg
    if (pinAnswer.userPinNumber === myPin){  //sirf 1234 print karnay k liye .userPinNumber use hoga pinAnswer k saath
        console.log(`
Congratulations, your Pin Code is correct!`)}
             
    // 3 B) else print incorrect pin message & stop any further execution of code                 
    else{console.log(`
Your Pin code is incorrect`); process.exit(1)} // ; process.exit (1) stops the execution of program
                                
                                         
// 4- Make another user prompt (by using an object) which has three options to choose from
    let operationAnswer = await inquirer.prompt(
        [
            {
                name: "operation",
                message: `
Please select any of the options below
`,
                type: "list", //ab kiyunke withdraw & check balance 2 options hein tu array use hoga
                choices: ["withdraw cash manually", "select the default amount", "check balance"]
            }
        ]
    ) 
    
    //4 A) if selected withdraw cash manually:
        //a) 1)- Make a user prompt (by using an object) which says enter your amount
    if(operationAnswer.operation === "withdraw cash manually")
        {                           
            let amountAns = await inquirer.prompt(
                [                 
                    {name: "amount",
                    type: "number",
                    message: `
Enter your amount
                    `,
                }                            
            ])
                  //-- if user selected more than the current balance print Insufficient balance
            if(amountAns.amount > myBalance){
                console.log("Insufficient Balance");
            }               
                  //-- else show user the remaining balance (Current balance - withdrawn amount)                  
            else {myBalance -= amountAns.amount   // -= se subratact kar ke de ga value
            console.log(`
Your remaining Balance is: ${myBalance}`)
        }
    }            
            
    //4 B) if selected the default amount:
        //a) 1)- Make a user prompt (by using an object) which says select default amount from below: [3000, 5000, 10000]
                                                          //Note: {add a new parameter showing default amounts in object}
    if(operationAnswer.operation === "select the default amount")
        {
            let defaultAmount = await inquirer.prompt(
                [
                    {name: "default",
                    type: "number",
                    message : `
Select the default amount from the following:
[3000, 5000, 10000].
                    `,
                    choices : [3000, 5000, 10000]
                }
            ])            
        //print the remaining balance (Current balance - withdrawn amount)
            myBalance -= defaultAmount.default  // -= se subratact kar ke de ga value
            console.log(`
Your remaining Balance is: ${myBalance}`)
        }
          
    //4 C) if check balance is selected then print the current Balance
    else if(operationAnswer.operation ==="check balance"){
    console.log (`
Your current Balance is: ${myBalance}
`)}
    

// 5- Print Thanks Msg
console.log(`
    Thank you for using this our service
    `)
