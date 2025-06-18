## 📘 Section: Pinning and Self-Referential Types
### 🔹 Category: Using `Pin<Box<T>>` Safely to Prevent Moves After Initialization
#### ❓ Question 743: Using `Pin<Box<T>>` safely to prevent moves after initialization

Write a Rust example that demonstrates how to use `Pin<Box<T>>` to prevent a struct from being moved after it is initialized.

- Define a struct that should not be moved after initialization.
- Use `Pin<Box<T>>` to allocate and pin the struct.
- Show that moving the pinned struct is not allowed.

🔧 **Task:** Show how `Pin<Box<T>>` can be used to guarantee that a value will not be moved in memory after being pinned.
