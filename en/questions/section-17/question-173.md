## 📘 Section: Error Handling and Result Types  
### 🔹 Category: Custom Error Types  
#### ❓ Question 173: Defining and using custom error types

Create a custom error type using an enum and implement the `std::fmt::Display` trait for it. Use this error type in a function that returns a `Result`.

- Define an enum named `MyError` with at least two variants.
- Implement `Display` for `MyError`.
- Write a function that returns `Result<T, MyError>`.

🔧 **Task:** Define and use a custom error type in a function that can fail.
