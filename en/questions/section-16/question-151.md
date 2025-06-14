## 📘 Section: Advanced Traits and Generics  
### 🔹 Category: Trait Bounds and Where Clauses  
#### ❓ Question 151: Using trait bounds in function signatures

Write a Rust function that accepts any type implementing both the `Display` and `Debug` traits and prints the value using both formatting styles.

- Define a function named `print_info`.
- The function should accept a generic parameter constrained by both `Display` and `Debug`.
- Print the value using `{}` and `{:?}` formats.

🔧 **Task:** Use trait bounds in the function signature to require both `Display` and `Debug` for the generic type.
