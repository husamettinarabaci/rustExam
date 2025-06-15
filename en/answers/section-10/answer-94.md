## 📘 Section: Structs II  
### 🔹 Category: Method returning a value  
#### ✅ Answer 94: Method returning a value

In Rust, methods can return values. Here, we define a `Square` struct and implement an `area` method that returns the area as a value.

```rust
struct Square {
    side: u32,
}

impl Square {
    fn area(&self) -> u32 {
        self.side * self.side
    }
}

fn main() {
    let s = Square { side: 4 };
    println!("Area: {}", s.area());
}
```
