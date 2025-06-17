## 📘 Section: Lifetimes and Borrowing in Practice  
### 🔹 Category: Lifetime Elision Rules  
#### ❓ Question 443: Using lifetime elision rules properly

Write a function that takes a string slice and returns its length. Do not use explicit lifetime annotations in the function signature.

- Define a function that accepts a `&str` and returns its length as `usize`.
- Rely on Rust's lifetime elision rules.

🔧 **Task:** Show how lifetime elision makes explicit annotations unnecessary in simple cases.
