## 📘 Section: Traits I  
### 🔹 Category: Trait Objects and Dynamic Dispatch  
#### ❓ Question 203: Using trait objects

Write a Rust program that demonstrates the use of trait objects for dynamic dispatch.

- Define a trait named `Shape` with a method `area()` that returns an `f64`.
- Implement the `Shape` trait for at least two structs, such as `Circle` and `Rectangle`.
- Create a vector of boxed trait objects (`Vec<Box<dyn Shape>>`) containing different shapes.
- Iterate over the vector and print the area of each shape using dynamic dispatch.

🔧 **Task:** Show how to use trait objects (`Box<dyn Trait>`) to store and use different types that implement the same trait, enabling dynamic dispatch in Rust.
