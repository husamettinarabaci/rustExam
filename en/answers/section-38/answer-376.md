## 📘 Section: Ownership Across Function Boundaries
### 🔹 Category: Ownership and borrowing errors
#### ✅ Answer 376: Avoiding double moves and use-after-move errors

After transferring ownership of a vector to a function, trying to use or move the same variable again will result in a compiler error. Rust prevents use-after-move and double move errors by enforcing ownership rules. To avoid these errors, do not use or move a variable after its ownership has been transferred.

```rust
fn take_ownership(v: Vec<i32>) {
    println!("Ownership taken: {:?}", v);
}

fn main() {
    let v = vec![1, 2, 3];
    take_ownership(v);
    // take_ownership(v); // ERROR: v has already been moved
    // println!("Vector: {:?}", v); // ERROR: v can no longer be used
}
```
