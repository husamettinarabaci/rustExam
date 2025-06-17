## 📘 Section: Advanced Pattern Matching
### 🔹 Category: Destructuring tuples and structs
#### ✅ Answer 382: Destructuring tuples and structs

This problem demonstrates how to destructure a tuple and a struct using match statements to access their fields. This is a common pattern in Rust for extracting values from data structures.

```rust
struct Point { x: i32, y: i32 }

fn main() {
    let tup = (10, 20);
    let p = Point { x: 5, y: 15 };

    match tup {
        (a, b) => println!("Tuple values: a = {}, b = {}", a, b),
    }

    match p {
        Point { x, y } => println!("Point values: x = {}, y = {}", x, y),
    }
}
```
