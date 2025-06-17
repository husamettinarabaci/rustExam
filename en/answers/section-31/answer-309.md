## 📘 Section: Enums, Variants, and Algebraic Data Types  
### 🔹 Category: Enum Representation and FFI  
#### ✅ Answer 309: Enum representation with `#[repr]` and FFI

In Rust, the memory layout of enums is compiler-defined by default. To make enums compatible with C (FFI), you must specify their representation using `#[repr(u8)]`, `#[repr(i32)]`, or `#[repr(C)]`. This ensures the enum is represented as expected on the C side. Below is an example of passing an enum as a parameter to a C function via FFI.

```rust
#[repr(u8)]
enum Color {
    Red = 1,
    Green = 2,
    Blue = 3,
}

extern "C" {
    fn print_color(color: Color);
}

fn main() {
    unsafe {
        print_color(Color::Green);
    }
}
```

In this example, the `Color` enum is represented as a `u8`, and should be defined the same way on the C side. The `extern "C"` block declares the C function in Rust, and it is called within an `unsafe` block.
