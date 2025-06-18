## 📘 Section: Memory Safety and Static Analysis
### 🔹 Category: Detecting and Fixing Use-after-free Errors
#### ✅ Answer 854: Detecting and fixing use-after-free errors

A use-after-free error occurs when code tries to access an object after it has been freed. Rust’s ownership and lifetime system prevents these errors at compile time.

Example (will not compile):

```rust
let r;
{
    let s = String::from("hello");
    r = &s;
} // s is dropped here
println!("{}", r); // ERROR: s is out of scope
```

The compiler’s lifetime rules prevent use-after-free in safe Rust code.
