## 📘 Section: Full-Stack Rust Integration  
### 🔹 Category: Code sharing between backend and frontend  
#### ✅ Answer 691: Sharing code between backend and frontend

In full-stack Rust, code can be shared between backend and frontend (WASM) by placing common types or logic in a shared crate. This reduces duplication and ensures consistency.

Example:
```rust
// shared/src/lib.rs
#[derive(serde::Serialize, serde::Deserialize)]
pub struct User {
    pub id: u32,
    pub name: String,
}
```
Both backend and frontend can depend on the `shared` crate. Benefits include type safety and less duplication, but challenges include dependency management and WASM compatibility.
