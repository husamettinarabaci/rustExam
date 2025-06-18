## 📘 Section: Pinning and Self-Referential Types
### 🔹 Category: Creating a Self-Referential Type Using `Pin` and `PhantomPinned`
#### ❓ Question 742: Creating a self-referential type using `Pin` and `PhantomPinned`

Write a Rust example that demonstrates how to create a self-referential struct safely using `Pin` and `PhantomPinned`.

- Define a struct with a self-reference and a `PhantomPinned` marker.
- Use `Pin<Box<T>>` to ensure the struct is not moved after initialization.
- Show how to initialize and use the self-reference safely.

🔧 **Task:** Show how to use pinning to safely implement a self-referential type in Rust.
