## 📘 Section: Structs I  
### 🔹 Category: Tuple Structs and Unit-like Structs  
#### ✅ Answer 85: Tuple structs and unit-like structs

Tuple structs in Rust are like tuples but have a name, and unit-like structs have no fields. Here, we define and use both types.

```rust
struct Color(u8, u8, u8);
struct Marker;

fn main() {
    let black = Color(0, 0, 0);
    let marker = Marker;
    println!("Color: {}, {}, {}", black.0, black.1, black.2);
    // marker can be used as a value, but has no fields
}
```
