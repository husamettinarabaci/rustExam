## 📘 Section: Unsafe Rust and Advanced Features  
### 🔹 Category: Unions  
#### ✅ Answer 195: Defining and using unions in Rust

Unions allow different types to share the same memory. Accessing union fields is unsafe because you must ensure the correct field is being read.

```rust
union MyUnion {
    i: i32,
    f: f32,
}

fn main() {
    let u = MyUnion { i: 42 };
    unsafe {
        println!("i: {}", u.i);
    }
}
```
