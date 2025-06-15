## 📘 Section: Advanced Patterns  
### 🔹 Category: Using `ref` and `ref mut` in patterns  
#### ✅ Answer 165: Using `ref` and `ref mut` in patterns

This example demonstrates how to use `ref` and `ref mut` in pattern matching to borrow fields immutably and mutably. `ref` creates an immutable reference, while `ref mut` creates a mutable reference, allowing you to modify the value.

```rust
fn main() {
    let mut tuple = (1, 2);
    match tuple {
        (ref x, ref mut y) => {
            println!("x: {}", x);
            *y += 10;
            println!("y after mutation: {}", y);
        }
    }
}
```
