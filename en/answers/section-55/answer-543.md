## 📘 Section: Systems-Level Design with Rust  
### 🔹 Category: Unsafe Code and Pointers  
#### ✅ Answer 543: Using `unsafe` to manipulate raw pointers

Raw pointers allow direct memory access in Rust. Here is an example of reading and writing through a raw pointer in an unsafe block.

```rust
fn main() {
    let mut x = 42;
    let ptr = &mut x as *mut i32;
    unsafe {
        *ptr = 100;
        println!("x: {}", *ptr);
    }
}
```
