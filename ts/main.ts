import { DebitAccount, CreditAccount } from "./accounts.js";

// Создание экземпляра дебетового счета
const debitAccount = new DebitAccount("DEBIT-4789", 4269);
debitAccount.deposit(1250); // Пополнение счета
debitAccount.withdraw(250); // Снятие средств
debitAccount.getBalance(); // Проверка баланса

console.log("\n");

// Создание экземпляра кредитного счета
const creditAccount = new CreditAccount("CREDIT-6569", 2000);
creditAccount.deposit(660); // Пополнение счета (без долга)
creditAccount.withdraw(1900); // Снятие средств
creditAccount.getBalance(); // Проверка баланса
creditAccount.getDebt(); // Проверка задолженности

creditAccount.withdraw(200); // Снятие средств с использованием кредитного лимита
creditAccount.getBalance(); // Проверка баланса
creditAccount.getDebt(); // Проверка задолженности после снятия

creditAccount.deposit(1700); // Пополнение для частичного покрытия долга
creditAccount.getBalance(); // Проверка баланса
creditAccount.getDebt(); // Проверка задолженности
