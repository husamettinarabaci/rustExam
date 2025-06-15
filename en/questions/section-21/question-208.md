## 📘 Section: Traits I  
### 🔹 Category: Where Clauses in Trait Bounds  
#### ❓ Question 208: Using `where` clauses

Write a Rust function that uses a `where` clause to specify trait bounds for generic parameters.

- Define two traits: `Displayable` with a method `display()` and `Serializable` with a method `serialize()` that returns a `String`.
- Implement both traits for a struct named `User`.
- Write a function `show_and_serialize` that takes a generic parameter and uses a `where` clause to require both traits.
- In `main`, create a `User`, call `show_and_serialize`, and print the result.

🔧 **Task:** Demonstrate how to use `where` clauses in Rust to specify complex trait bounds for generic parameters in function signatures.
