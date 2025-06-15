## 📘 Section: Option and Result Types  
### 🔹 Category: Result Type and Error Propagation  
#### ❓ Question 184: Propagating errors with `?`

Write a Rust function that reads a number from a file and returns a `Result<i32, Box<dyn std::error::Error>>`. Use the `?` operator to propagate errors. Demonstrate how to call this function and handle the result.

- Define a function that opens a file, reads a line, and parses it as an integer.
- Use the `?` operator to propagate errors.
- Show how to call the function and handle both success and error cases.

🔧 **Task:** Demonstrate error propagation in Rust using the `?` operator in a function that returns `Result`.
