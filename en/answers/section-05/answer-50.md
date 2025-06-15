## 📘 Section: Functions I  
### 🔹 Category: Function Parameters  
#### ✅ Answer 50: Function that takes a tuple as argument

A function in Rust can take a tuple as a parameter by specifying the tuple type in the function signature.

```rust
fn print_point(point: (i32, i32)) {
    println!("Point: ({}, {})", point.0, point.1);
}

fn main() {
    print_point((5, 8));
}
```
