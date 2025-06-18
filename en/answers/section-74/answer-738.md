## 📘 Section: Trait Objects and VTable Mechanics
### 🔹 Category: Trait Objects in Heterogeneous Collections
#### ✅ Answer 738: Using trait objects in heterogeneous collections

Trait objects allow you to store different types that implement the same trait in a single collection, enabling heterogeneous collections.

```rust
trait Shape {
    fn draw(&self);
}

struct Circle;
struct Square;

impl Shape for Circle {
    fn draw(&self) { println!("Drawing a circle"); }
}
impl Shape for Square {
    fn draw(&self) { println!("Drawing a square"); }
}

fn main() {
    let shapes: Vec<Box<dyn Shape>> = vec![
        Box::new(Circle),
        Box::new(Square),
    ];
    for shape in shapes.iter() {
        shape.draw();
    }
}
```
