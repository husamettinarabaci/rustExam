## 📘 Section: Advanced Patterns  
### 🔹 Category: Destructuring tuples in function parameters  
#### ✅ Answer 168: Destructuring tuples in function parameters

This example demonstrates how to destructure a tuple directly in a function's parameter list. This allows you to access the tuple's elements by name inside the function body.

```rust
fn print_coords((x, y): (i32, i32)) {
    println!("x: {}, y: {}", x, y);
}

fn main() {
    let point = (10, 20);
    print_coords(point);
}
```
