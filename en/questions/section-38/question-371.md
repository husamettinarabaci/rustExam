## 📘 Section: Ownership Across Function Boundaries  
### 🔹 Category: Passing owned values to functions  
#### ❓ Question 371: Passing owned values to functions

Write a Rust program that does the following:

- Create a string variable and pass it to a function by value (transferring ownership).
- The function should perform an operation on the string (e.g., convert it to uppercase and print it).
- After the function call, try to use the original variable in `main` and observe the compiler error.

🔧 **Task:** Demonstrate how ownership is transferred when passing owned values to functions, and show that the original variable cannot be used after ownership has moved.
