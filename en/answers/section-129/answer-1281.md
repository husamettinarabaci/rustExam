## 📘 Section: Fullstack WASM Applications
### 🔹 Category: Project Setup and Basics
#### ✅ Answer 1281: Setting up a fullstack Rust+WASM project

This task involves creating a project skeleton where both backend and frontend are written in Rust, and the frontend is compiled to WASM. You can use Axum or Actix-Web for the backend, and Yew or Leptos for the frontend. The project is structured as two separate crates, and the frontend is built as a WASM target.

```rust
// Example project structure:
// backend/  --> Axum or Actix-Web server
// frontend/ --> Yew or Leptos WASM app

// Frontend main file (src/main.rs):
fn main() {
    web_sys::console::log_1(&"Hello, WASM!".into());
}
```
