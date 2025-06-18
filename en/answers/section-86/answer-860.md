## 📘 Section: Memory Safety and Static Analysis
### 🔹 Category: Improving Code Safety with Contracts and Assertions
#### ✅ Answer 860: Improving code safety with contracts and assertions

Contract-based programming explicitly states the preconditions and postconditions of functions. In Rust, macros like `assert!` and `assert_eq!` are used to check these conditions.

```rust
fn divide(a: i32, b: i32) -> i32 {
    assert!(b != 0, "Denominator cannot be zero"); // precondition
    a / b
}

fn main() {
    let result = divide(10, 2);
    assert_eq!(result, 5); // postcondition
}
```

This approach helps catch errors early and increases code safety.
