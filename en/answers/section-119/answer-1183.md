## 📘 Section: Actor Model Advanced Topics
### 🔹 Category: Dynamic actor creation and lifecycle management
#### ✅ Answer 1183: Dynamic actor creation and lifecycle management

In Rust, actors can be created dynamically at runtime. Each actor's lifecycle includes initialization, running, and termination. When an actor is terminated, its resources are released.

```rust
// Example of dynamic actor creation (simple diagram):
//
// Supervisor
//   └── spawn() -> Worker Actor
//
// Worker Actor is started, runs, and is terminated when done.
```
