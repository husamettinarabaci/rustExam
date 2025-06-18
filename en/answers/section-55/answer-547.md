## 📘 Section: Systems-Level Design with Rust  
### 🔹 Category: Memory Layout and Inspection  
#### ✅ Answer 547: Inspecting memory layout with `std::mem::size_of`

You can use `std::mem::size_of` to get the memory size of different types.

```rust
use std::mem::size_of;

struct MyStruct {
    a: i32,
    b: f64,
}

fn main() {
    println!("i32: {} bytes", size_of::<i32>());
    println!("f64: {} bytes", size_of::<f64>());
    println!("MyStruct: {} bytes", size_of::<MyStruct>());
}
```
