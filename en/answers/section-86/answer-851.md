## 📘 Section: Memory Safety and Static Analysis
### 🔹 Category: Ownership Model Internals
#### ✅ Answer 851: Understanding Rust’s ownership model internals

Rust’s ownership model ensures that each value has a single owner, and only one owner manages the value at a time. Borrowing allows temporary references, and lifetimes specify how long references are valid. This model guarantees memory safety without a garbage collector.

```rust
fn main() {
    let s = String::from("hello"); // s owns the string
    let r = &s; // borrow (immutable reference)
    println!("{}", r);
} // s is dropped here
```

The ownership model prevents double free and use-after-free errors at compile time.
