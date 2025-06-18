## 📘 Section: Functions I  
### 🔹 Category: Function Return Types  
#### ✅ Answer 49: Function that returns a tuple

A function in Rust can return a tuple by specifying the tuple type in the return type. This allows returning multiple values from a function.

```rust
fn get_point() -> (i32, i32) {
    (3, 4)
}

fn main() {
    let point = get_point();
    println!("Point: ({}, {})", point.0, point.1);
}
```
