## 📘 Section: Pinning and Self-Referential Types
### 🔹 Category: Writing Safe APIs That Accept Pinned Types
#### ❓ Question 745: Writing safe APIs that accept pinned types

Write a Rust example that demonstrates how to write a safe API that accepts a pinned type (`Pin<&mut T>` or `Pin<Box<T>>`).

- Define a struct that requires pinning.
- Implement a method that takes `Pin<&mut Self>` as a receiver.
- Show how to use this method safely from outside the struct.

🔧 **Task:** Show how to design and use safe APIs for types that must not be moved after being pinned.
