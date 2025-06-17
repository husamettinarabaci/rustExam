## 📘 Section: WebAssembly and Frontend with Leptos/Yew
### 🔹 Category: Shared Type Definitions
#### ✅ Answer 536: Sharing types between frontend and backend via `wasm-shared` crate

A struct shared by both frontend and backend can be defined as follows:

```rust
// shared/src/lib.rs
#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct User {
    pub id: u32,
    pub name: String,
}
```

This struct is included as a `shared` crate in both backend and frontend projects.
