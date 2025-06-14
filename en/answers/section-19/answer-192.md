## 📘 Section: Unsafe Rust and Advanced Features  
### 🔹 Category: FFI (Foreign Function Interface)  
#### ✅ Answer 192: Calling C functions from Rust using FFI

FFI (Foreign Function Interface) allows Rust to call functions written in other languages, such as C. This requires `extern` blocks and unsafe code.

```rust
extern "C" {
    fn abs(input: i32) -> i32;
}

fn main() {
    let x = -5;
    let abs_x = unsafe { abs(x) };
    println!("abs({}) = {}", x, abs_x);
}
```
