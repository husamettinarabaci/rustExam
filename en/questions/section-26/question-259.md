## 📘 Section: Ownership in Complex Structures  
### 🔹 Category: Flexible Ownership and Cow  
#### ❓ Question 259: Using `Cow` (Copy on Write) to handle flexible ownership

Write a Rust program that does the following:

- Define a function that can accept both owned and borrowed data.
- Use the `std::borrow::Cow` type to allow the function to take either a `&str` or a `String`.
- Inside the function, create a copy of the data if needed (for example, to convert all letters to uppercase).
- Observe how ownership and copying work in practice.

🔧 **Task:** Write a flexible function using `Cow` that works with both borrowed and owned data.
