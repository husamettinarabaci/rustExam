## 📘 Section: Pattern Matching and Control Flow  
### 🔹 Category: Enums and Pattern Matching  
#### ✅ Answer 283: Destructuring structs and tuples in match arms

This problem demonstrates how to use pattern matching with `match` to destructure both structs and tuples in Rust. You can easily access struct fields and tuple elements in match arms for flexible control flow.

```rust
struct Point {
    x: i32,
    y: i32,
}

fn print_point(p: Point) {
    match p {
        Point { x: 0, y } => println!("On the y axis at {}", y),
        Point { x, y: 0 } => println!("On the x axis at {}", x),
        Point { x, y } => println!("At ({}, {})", x, y),
    }
}

fn print_tuple(t: (i32, i32)) {
    match t {
        (0, y) => println!("Tuple on y axis: {}", y),
        (x, 0) => println!("Tuple on x axis: {}", x),
        (x, y) => println!("Tuple at ({}, {})", x, y),
    }
}

fn main() {
    print_point(Point { x: 0, y: 5 });
    print_point(Point { x: 3, y: 0 });
    print_point(Point { x: 2, y: 4 });

    print_tuple((0, 7));
    print_tuple((6, 0));
    print_tuple((3, 8));
}
```
