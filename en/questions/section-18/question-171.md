## 📘 Section: Error Handling and Result Types  
### 🔹 Category: Basic Error Handling  
#### ❓ Question 171: Using the Result type for error handling

Write a function that attempts to parse a string into an integer and returns a `Result<i32, String>`. If parsing fails, return an appropriate error message.

- Define a function named `parse_to_int`.
- Use Rust's `parse` method and handle errors.
- Return `Ok(i32)` on success, or `Err(String)` on failure.

🔧 **Task:** Use the `Result` type to handle possible parsing errors in a function.
