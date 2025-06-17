## 📘 Section: Advanced Pattern Matching
### 🔹 Category: Pattern matching in function parameters
#### ✅ Answer 390: Pattern matching in function parameters

This problem demonstrates how to use pattern matching directly in function parameters to extract values for use inside the function.

```rust
fn print_coords((x, y): (i32, i32)) {
    println!("x = {}, y = {}", x, y);
}

fn main() {
    let point = (3, 7);
    print_coords(point);
}
```
