## 📘 Section: Closures and Ownership  
### 🔹 Category: Returning closures from functions  
#### ✅ Answer 244: Returning Closures from Functions

This solution demonstrates how to return a closure from a function. The function returns a closure that adds a captured value to its argument, using `Box<dyn Fn(i32) -> i32>` for dynamic dispatch.

```rust
fn make_adder(x: i32) -> Box<dyn Fn(i32) -> i32> {
    Box::new(move |y| x + y)
}

fn main() {
    let add_five = make_adder(5);
    let add_ten = make_adder(10);
    println!("5 + 3 = {}", add_five(3)); // 8
    println!("10 + 7 = {}", add_ten(7)); // 17
}
```
