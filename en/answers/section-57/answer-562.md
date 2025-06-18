## 📘 Section: Low-Level Embedded Systems
### 🔹 Category: Using assembly within Rust via `global_asm!`
#### ✅ Answer 562: Using assembly within Rust via `global_asm!`

The `global_asm!` macro allows you to include raw assembly code in a Rust file, useful for low-level hardware operations. Example:

```rust
#![feature(global_asm)]
global_asm!(r#"
    .global my_asm_func
my_asm_func:
    bx lr
"#);

extern "C" {
    fn my_asm_func();
}

fn main() {
    unsafe { my_asm_func(); }
}
```

This code defines an assembly function and calls it from Rust.
