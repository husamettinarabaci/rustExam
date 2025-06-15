## 📘 Section: Structs II  
### 🔹 Category: Method chaining  
#### ✅ Answer 95: Method chaining

Method chaining in Rust is achieved by returning `&mut self` from methods. Here, we define a `Builder` struct with `set_x` and `set_y` methods that allow chaining.

```rust
struct Builder {
    x: i32,
    y: i32,
}

impl Builder {
    fn set_x(&mut self, x: i32) -> &mut Self {
        self.x = x;
        self
    }
    fn set_y(&mut self, y: i32) -> &mut Self {
        self.y = y;
        self
    }
}

fn main() {
    let mut b = Builder { x: 0, y: 0 };
    b.set_x(10).set_y(20);
    println!("x: {}, y: {}", b.x, b.y);
}
```
