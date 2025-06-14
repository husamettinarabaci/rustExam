## 📚 Section: Traits  
### 🔹 Category: Operator Overloading  
#### ✅ Answer 100: Operator overloading with traits

**Explanation:**
You can overload operators by implementing traits like `Add` for your types.

```rust
use std::ops::Add;

struct Point {
    x: i32,
    y: i32,
}

impl Add for Point {
    type Output = Point;
    fn add(self, other: Point) -> Point {
        Point { x: self.x + other.x, y: self.y + other.y }
    }
}

fn main() {
    let p1 = Point { x: 1, y: 2 };
    let p2 = Point { x: 3, y: 4 };
    let p3 = p1 + p2;
    println!("{} {}", p3.x, p3.y);
}
```
