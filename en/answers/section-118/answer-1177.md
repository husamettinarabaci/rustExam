## 📘 Section: Lock-Free Data Structures
### 🔹 Category: Hazard pointers or epoch-based reclamation
#### ✅ Answer 1177: Hazard pointers or epoch-based reclamation

Hazard pointers and epoch-based reclamation provide safe memory management for lock-free data structures.

- Hazard pointers: Each thread marks objects it accesses, ensuring they are not freed prematurely.
- Epoch-based: Memory is reclaimed only after all threads have passed a certain "epoch."

In Rust, crates like crossbeam-epoch implement epoch-based management.
