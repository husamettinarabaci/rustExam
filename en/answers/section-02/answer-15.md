## 📘 Section: Variables, Constants, and Types  
### 🔹 Category: Mutability  
#### ✅ Answer 15: Declaring mutable and immutable variables

**Explanation:**

In Rust, variables are immutable by default. You can make a variable mutable by using the `mut` keyword.

```rust
fn main() {
    let mut x = 5; // mutable
    let y = 10;    // immutable
    x = 7;
    println!("x: {}", x);
    println!("y: {}", y);
}
```
