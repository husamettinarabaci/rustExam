## 📘 Section: Error Handling and Result Types  
### 🔹 Category: Option and Result Interconversion  
#### ❓ Question 174: Converting between Option and Result

Write a function that converts an `Option<T>` to a `Result<T, String>`, providing a custom error message if the option is `None`.

- Define a function named `option_to_result`.
- Accept an `Option<T>` and a custom error message.
- Return `Ok(T)` if `Some`, or `Err(String)` if `None`.

🔧 **Task:** Convert an `Option` to a `Result` with a custom error message.
