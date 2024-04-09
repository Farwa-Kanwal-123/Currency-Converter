#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//wellcome message:
console.log(chalk.magenta.bold("\n\t\t<<===============================================>>"));
console.log(chalk.magenta.bold(`\t  \t  Wellcome to my 'Currency Converter' application!`));
console.log(chalk.magenta.bold("\t \t<<================================================>>\n"));
//define the list of currencies and their exchange rate.
let exchange_rate = {
    "USD": 1,
    "EUR": 0.9,
    "JYP": 113,
    "CAD": 1.3,
    "AUD": 1.65,
    "PKR": 280,
    //add more currencies and thier exchange rates
};
//prompt the user to select cuurrencies to convert from and to
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"],
        message: chalk.yellowBright("Select the currency to convert from: \n"),
    },
    {
        name: "to_currency",
        type: "list",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"],
        message: chalk.yellowBright("Select the currency to convert into: \n"),
    },
    {
        name: "amount",
        type: "input",
        message: chalk.yellowBright("Enter the amount to convert: \n"),
    },
]);
//perform currency conversion by using formula
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
//formula cnversion
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
//display the converted amount
console.log(chalk.green(`Converted Amount is = ${chalk.bold(converted_amount.toFixed(2))}`));
