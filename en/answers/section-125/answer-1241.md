## 📘 Section: Rust for High-Assurance Systems
### 🔹 Category: Formal Methods and Verification
#### ✅ Answer 1241: Formal methods and Rust

Formal methods use mathematical techniques to specify and verify software correctness, especially in safety-critical systems. In Rust, tools like Prusti or Kani can be used for formal verification.

```rust
// Example: Using Prusti for contract checking
fn add(a: i32, b: i32) -> i32 {
    a + b
}
// Prusti can verify properties like overflow absence or pre/post-conditions.
```

These tools help ensure that Rust code meets strict correctness guarantees.
