## 📘 Section: Generics II  
### 🔹 Category: Generic type aliases  
#### ❓ Question 229: Defining and using generic type aliases

Write a Rust example that demonstrates the use of generic type aliases.

- Define a type alias `ResultString<T>` for `Result<T, String>`.
- Write a function `parse_number` that takes a string slice and returns a `ResultString<i32>`.
- The function should attempt to parse the string as an `i32` and return an error message as a `String` if parsing fails.
- Show how to use this function and handle both success and error cases.

🔧 **Task:** Use a generic type alias to simplify function signatures and error handling.
