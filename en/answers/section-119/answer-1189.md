## 📘 Section: Actor Model Advanced Topics
### 🔹 Category: Typed actors for compile-time safety
#### ✅ Answer 1189: Typed actors for compile-time safety

In Rust, typed actors can be defined to accept only specific message types. This prevents type errors at compile time and increases safety.

```rust
// Example of a typed actor:
struct PrintActor;

impl PrintActor {
    fn handle(&self, msg: String) {
        println!("Received: {}", msg);
    }
}
// PrintActor only accepts messages of type String.
```
