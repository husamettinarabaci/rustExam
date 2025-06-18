## 📘 Section: Lifetimes I  
### 🔹 Category: Lifetime in Closures  
#### ✅ Answer 78: Lifetime in closures

When a closure captures a reference, its lifetime is tied to the referenced value. If the value goes out of scope, using the closure will cause a compile-time error. Here is an example:

```rust
fn main() {
    let s = String::from("closure lifetime");
    let get_len = || s.len(); // Closure borrows s
    println!("Length: {}", get_len());
    // If s went out of scope before get_len was used, this would be an error.
}
```

If you try to use the closure after `s` is dropped, the compiler will prevent it to avoid a dangling reference.
