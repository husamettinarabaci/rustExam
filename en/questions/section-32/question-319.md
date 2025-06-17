## 📘 Section: Traits and Trait Bounds
### 🔹 Category: Blanket Implementations
#### ❓ Question 319: Using blanket implementations

Write a Rust program that does the following:

- Define a trait named `Printable` with a method `print`.
- Provide a blanket implementation of `Printable` for all types `T` that implement `std::fmt::Display`.
- In the `main` function, create a `String` and an `i32` variable, and call the `print` method on both.

🔧 **Task:** Use a blanket implementation to automatically implement a trait for multiple types.
