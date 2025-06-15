## 📘 Section: Ownership and Borrowing I  
### 🔹 Category: Copy Types vs. Move Types  
#### ✅ Answer 65: Copy types vs. move types

In Rust, types like `i32` implement the `Copy` trait, so assigning them copies the value. Types like `String` are move types, so assigning them moves ownership.

```rust
fn main() {
    let x = 10; // i32 is Copy
    let y = x;
    println!("x: {}, y: {}", x, y); // both work

    let s1 = String::from("hello"); // String is Move
    let s2 = s1;
    // println!("{}", s1); // error: value borrowed here after move
    println!("{}", s2); // works fine
}
```

The `x` variable can still be used after assignment, but `s1` cannot because its ownership was moved to `s2`.
