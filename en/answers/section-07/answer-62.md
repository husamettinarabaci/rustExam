## 📘 Section: Ownership and Borrowing I  
### 🔹 Category: Move Semantics  
#### ✅ Answer 62: Move semantics with variables

In Rust, assigning a non-Copy type (like `String`) to another variable moves the value, making the original variable invalid. This is called move semantics.

```rust
fn main() {
    let a = String::from("Rust");
    let b = a; // move occurs here
    // println!("{}", a); // error: value borrowed here after move
    println!("{}", b); // works fine
}
```

If you uncomment the line with `a`, the compiler will report an error because `a` is no longer valid after the move.
