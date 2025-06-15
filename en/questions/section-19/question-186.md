## 📘 Section: Option and Result Types  
### 🔹 Category: Method Chaining  
#### ❓ Question 186: Chaining Option and Result methods

Write a Rust function that takes an `Option<&str>`, tries to parse it as an integer, and returns a `Result<i32, String>`. Use method chaining with `map`, `ok_or`, and `and_then` to process the value. Demonstrate how to call this function with different inputs.

- Accept an `Option<&str>` as input.
- Use `ok_or` to convert `Option` to `Result`.
- Use `and_then` and `map` to process and parse the value.
- Show how to call the function with both `Some` and `None` values.

🔧 **Task:** Demonstrate chaining of `Option` and `Result` methods in Rust for error handling and value transformation.
