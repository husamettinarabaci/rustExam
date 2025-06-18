## 📘 Section: FFI and Foreign Interfacing  
### 🔹 Category: Safe C Interfacing  
#### ✅ Answer 601: Calling C functions safely with `extern "C"`

To call C functions from Rust, use an `extern "C"` block to declare the function signature. You must use `unsafe` to call external functions, and be careful with type conversions and memory safety.

```rust
extern "C" {
    fn abs(input: i32) -> i32;
}

fn main() {
    unsafe {
        let x = -42;
        let y = abs(x);
        println!("abs({}) = {}", x, y);
    }
}
```
