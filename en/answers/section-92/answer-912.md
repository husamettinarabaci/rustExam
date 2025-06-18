## 📘 Section: Systems Security and Hardening
### 🔹 Category: Protecting against timing attacks
#### ✅ Answer 912: Protecting against timing attacks

A timing attack exploits differences in how long operations take to reveal secret data (e.g., passwords). To prevent this, use constant-time operations that do not short-circuit or branch on secret data.

Example of constant-time comparison:

```rust
fn constant_time_eq(a: &[u8], b: &[u8]) -> bool {
    if a.len() != b.len() {
        return false;
    }
    let mut result = 0u8;
    for (&x, &y) in a.iter().zip(b.iter()) {
        result |= x ^ y;
    }
    result == 0
}
```
