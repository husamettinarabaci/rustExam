## 📘 Section: Actor Model Advanced Topics
### 🔹 Category: Actor supervision trees
#### ✅ Answer 1181: Designing scalable actor supervision trees

A supervision tree is a hierarchy where actors monitor their children. If a child fails, the parent restarts it. This design improves scalability and fault tolerance.

```rust
// Simple supervision tree diagram (not actual code):
//
// Supervisor
// ├── Worker 1
// ├── Worker 2
// └── Worker 3
//
// The supervisor monitors its children and restarts them on failure.
```
