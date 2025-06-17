## 📘 Section: Closures and Functional Techniques  
### 🔹 Category: Partial Application with Closures  
#### ✅ Answer 357: Partial application with closures

Partial application is a technique where you fix some arguments of a function and create a new closure. In Rust, this can be done by wrapping a function in a closure and providing some of its parameters. In the example below, the first parameter of the `add` function is fixed to 10, creating a new closure.

```rust
fn add(x: i32, y: i32) -> i32 {
    x + y
}

fn main() {
    let add_ten = |y| add(10, y);
    println!("{}", add_ten(5));   // 15
    println!("{}", add_ten(20));  // 30
}
```
