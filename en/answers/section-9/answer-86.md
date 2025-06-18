## 📘 Section: Structs I  
### 🔹 Category: Debug Printing a Struct  
#### ✅ Answer 86: Debug printing a struct

To print a struct using the `Debug` trait in Rust, derive `Debug` and use the `{:?}` format specifier with `println!`. This is useful for quick inspection of struct values.

```rust
#[derive(Debug)]
struct Point {
    x: i32,
    y: i32,
}

fn main() {
    let p = Point { x: 3, y: 7 };
    println!("{:?}", p);
}
```
