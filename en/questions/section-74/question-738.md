## 📘 Section: Trait Objects and VTable Mechanics
### 🔹 Category: Trait Objects in Heterogeneous Collections
#### ❓ Question 738: Using trait objects in heterogeneous collections

Write a Rust example that demonstrates how to use trait objects (`Box<dyn Trait>`) to store different types in a single collection.

- Define a trait and multiple structs implementing it.
- Store instances of these structs in a `Vec<Box<dyn Trait>>`.
- Iterate over the collection and call a trait method on each element.

🔧 **Task:** Show how to use trait objects to enable heterogeneous collections in Rust.
