## 📘 Section: Option and Result Types  
### 🔹 Category: Multiple Error Types  
#### ❓ Question 185: Handling multiple error types

Write a Rust function that reads a number from a file and returns a `Result<i32, Box<dyn std::error::Error>>`. The function should handle both I/O errors and parse errors. Demonstrate how to call this function and handle the different error types.

- Define a function that opens a file, reads a line, and parses it as an integer.
- Use `Box<dyn std::error::Error>` to allow multiple error types.
- Show how to call the function and print different error messages depending on the error.

🔧 **Task:** Demonstrate handling multiple error types in Rust using `Result` and trait objects for error types.
