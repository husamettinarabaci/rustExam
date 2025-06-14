## 📘 Section: Functions I  
### 🔹 Category: Unsafe Code  
#### ✅ Answer 50: The purpose of the `unsafe` keyword

**Explanation:**
The `unsafe` keyword is used to mark code blocks where Rust's safety guarantees are relaxed and the programmer takes responsibility for upholding safety.

**Example:**
```rust
let ptr = 42 as *const i32;
unsafe {
    println!("Value: {}", *ptr);
}
```
Here, dereferencing a raw pointer requires `unsafe` because Rust cannot guarantee safety.
