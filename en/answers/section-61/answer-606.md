## 📘 Section: FFI and Foreign Interfacing  
### 🔹 Category: C-Compatible Data Structures  
#### ✅ Answer 606: Creating C-compatible data structures with `#[repr(C)]`

The `#[repr(C)]` attribute ensures that Rust structs have the same memory layout as C structs, making data sharing safe.

```rust
#[repr(C)]
pub struct Point {
    pub x: i32,
    pub y: i32,
}

extern "C" {
    fn print_point(p: *const Point);
}

fn main() {
    let pt = Point { x: 1, y: 2 };
    unsafe { print_point(&pt); }
}
```
