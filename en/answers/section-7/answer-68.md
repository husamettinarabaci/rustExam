## 📘 Section: Ownership and Borrowing I  
### 🔹 Category: Multiple Immutable References  
#### ✅ Answer 68: Multiple immutable references

In Rust, you can have multiple immutable references to a variable at the same time, but you cannot have a mutable reference while immutable references are active. This ensures memory safety and prevents data races. Scopes can be used to control when references are valid.

```rust
fn main() {
    let x = 42;
    let r1 = &x;
    let r2 = &x;
    println!("Immutable references: {} and {}", r1, r2);
    // Uncommenting the following line will cause a compile error:
    // let r3 = &mut x;
    // println!("Mutable reference: {}", r3);
    // r1 and r2 are still in use here, so mutable reference is not allowed
    // After r1 and r2 go out of scope, you can create a mutable reference
}
```
