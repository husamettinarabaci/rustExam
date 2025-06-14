## 📘 Section: Unsafe Rust and Advanced Features  
### 🔹 Category: Static Variables  
#### ✅ Answer 193: Using static and mutable static variables

`static` variables are global and immutable by default. `static mut` variables are mutable globals, but accessing them is unsafe because of potential data races.

```rust
static HELLO: &str = "Hello, world!";
static mut COUNTER: i32 = 0;

fn main() {
    println!("{}", HELLO);
    unsafe {
        COUNTER += 1;
        println!("COUNTER: {}", COUNTER);
    }
}
```
