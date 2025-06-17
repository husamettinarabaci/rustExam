## 📘 Section: Ownership Across Function Boundaries  
### 🔹 Category: Borrowing values immutably in parameters  
#### ❓ Question 373: Borrowing values immutably in parameters

Write a Rust program that does the following:

- Create a string variable and pass it to a function as an immutable reference (`&`).
- The function should calculate and print the length of the string.
- In `main`, use the original string variable after the function call and print it to the terminal.

🔧 **Task:** Demonstrate that passing data to a function as an immutable reference does not transfer ownership, allowing the original variable to be used after the function call.
