## 📘 Section: Unsafe Rust and Advanced Features  
### 🔹 Category: Inline Assembly  
#### ✅ Answer 196: Using inline assembly in Rust

Inline assembly allows you to write CPU instructions directly. It is unsafe and should only be used when necessary, such as for performance or hardware access.

```rust
#![feature(asm)]

fn add_asm(a: i32, b: i32) -> i32 {
    let mut result;
    unsafe {
        asm!("add {0}, {1}", inout(reg) a => result, in(reg) b);
    }
    result
}
```
