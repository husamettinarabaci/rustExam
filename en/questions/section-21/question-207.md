## 📘 Section: Traits I  
### 🔹 Category: Multiple Trait Bounds  
#### ❓ Question 207: Multiple trait bounds

Write a Rust function that requires a generic type to implement multiple traits using trait bounds.

- Define two traits: `Printable` with a method `print()` and `Cloneable` with a method `clone_value()` that returns `Self`.
- Implement both traits for a struct named `Label`.
- Write a function `print_and_clone` that takes a generic parameter with both trait bounds (`T: Printable + Cloneable`), calls `print()`, clones the value, and returns the clone.
- In `main`, create a `Label`, call `print_and_clone`, and print the result.

🔧 **Task:** Demonstrate how to use multiple trait bounds in Rust function signatures to require that a type implements more than one trait.
