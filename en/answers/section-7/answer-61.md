## 📘 Section: Ownership and Borrowing I  
### 🔹 Category: Ownership Transfer  
#### ✅ Answer 61: Demonstrating ownership transfer

In Rust, assigning a non-Copy type (like `String`) to another variable transfers ownership. Using the original variable after the move causes a compile-time error.

```rust
fn main() {
    let s1 = String::from("hello");
    let s2 = s1; // ownership of the String is moved to s2
    // println!("{}", s1); // error: value borrowed here after move
    println!("{}", s2); // works fine
}
```

If you uncomment the line with `s1`, the compiler will report an error because `s1` is no longer valid after the move.
