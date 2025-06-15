## 📘 Section: Traits I  
### 🔹 Category: Trait Bounds in Function Signatures  
#### ❓ Question 206: Trait bounds in function signatures

Write a Rust function that accepts any type implementing a specific trait using trait bounds in the function signature.

- Define a trait named `Summarizable` with a method `summary()` that returns a `String`.
- Implement the `Summarizable` trait for at least two structs, such as `Article` and `Tweet`.
- Write a function `print_summary` that takes a generic parameter with a trait bound (`T: Summarizable`) and prints the summary.
- In `main`, create instances of both structs and call `print_summary` for each.

🔧 **Task:** Demonstrate how to use trait bounds in function signatures to accept any type that implements a specific trait in Rust.
