## 📘 Section: Generics II  
### 🔹 Category: Generic functions with lifetimes  
#### ❓ Question 224: Writing a generic function with lifetime parameters

Write a Rust function that demonstrates the use of both generic type parameters and explicit lifetime parameters.

- Define a function `longest_with_announcement` that takes two string slices with the same lifetime and a generic parameter `T`.
- `T` must implement the `Display` trait.
- The function should print the announcement and return the longer of the two string slices.

🔧 **Task:** Use both generic type and lifetime parameters in a function signature, and add a trait bound for the generic type.
