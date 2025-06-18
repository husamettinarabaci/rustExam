## 📘 Section: Rust for High-Assurance Systems
### 🔹 Category: Contracts and Invariants
#### ✅ Answer 1242: Using contracts and invariants in Rust code

Contracts specify preconditions and postconditions for functions, while invariants are properties that must always hold. In Rust, you can use `assert!` to enforce these at runtime.

```rust
fn divide(a: i32, b: i32) -> i32 {
    assert!(b != 0, "Precondition failed: divisor must not be zero");
    a / b
}
```

This function enforces a precondition that `b` is not zero, improving safety.
