## 📘 Section: Systems Security and Hardening
### 🔹 Category: Using Rust’s type system for secure APIs
#### ✅ Answer 913: Using Rust’s type system for secure APIs

Rust’s type system can prevent misuse of sensitive data by encapsulating it in newtypes or enums, restricting access and operations. The borrow checker enforces lifetimes and prevents data races.

Example: Using a newtype to restrict access to a password.

```rust
struct Password(String);

impl Password {
    fn new(s: String) -> Self {
        Password(s)
    }
    fn verify(&self, input: &str) -> bool {
        self.0 == input
    }
}
```
