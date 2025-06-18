## 📘 Section: Full-Stack Rust Integration  
### 🔹 Category: Managing configuration across layers  
#### ✅ Answer 695: Managing configuration across layers

In a full-stack Rust project, configuration can be managed using crates like `config` or environment variables. Shared configuration can be placed in a common crate.

Example:
```rust
// shared/src/lib.rs
pub struct AppConfig {
    pub api_url: String,
}
```
Both backend and frontend can use this struct for consistent configuration. Tools like `dotenv` or `config` help manage environment-specific settings.
