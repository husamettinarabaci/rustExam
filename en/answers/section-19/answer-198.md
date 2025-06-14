## 📘 Section: Unsafe Rust and Advanced Features  
### 🔹 Category: Zero-Sized Types  
#### ✅ Answer 198: Understanding zero-sized types (ZSTs)

Zero-sized types (ZSTs) are types that occupy no space in memory. They are useful for marker traits and type-level programming.

```rust
struct Marker;

fn main() {
    let m = Marker;
    println!("Size of Marker: {}", std::mem::size_of::<Marker>());
}
```
