## 📘 Section: Generics II  
### 🔹 Category: Generic trait objects  
#### ❓ Question 228: Using generic trait objects

Write a Rust example that demonstrates the use of trait objects with generics.

- Define a trait `Shape` with a method `area` that returns an `f64`.
- Implement `Shape` for at least two types (e.g., `Circle` and `Rectangle`).
- Create a function `print_area` that takes a reference to a trait object (`&dyn Shape`) and prints its area.
- Show how to store different shapes in a vector of trait objects and iterate over them to print their areas.

🔧 **Task:** Use trait objects to store and work with multiple types that implement the same trait.
