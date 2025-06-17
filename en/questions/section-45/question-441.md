## 📘 Section: Lifetimes and Borrowing in Practice  
### 🔹 Category: Function Lifetime Annotations  
#### ❓ Question 441: Adding explicit lifetimes to function parameters

Write a Rust function that takes two string slices with explicit lifetime annotations and returns the longer one.

- Define a function that accepts two `&str` parameters, each with the same explicit lifetime.
- Return a reference to the longer string slice.
- Use lifetime annotations in the function signature.

🔧 **Task:** Use explicit lifetime annotations to ensure the returned reference is valid for both input slices.
