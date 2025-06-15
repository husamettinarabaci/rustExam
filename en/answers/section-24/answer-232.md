## 📘 Section: Closures and Iterator Basics  
### 🔹 Category: Passing Closures to Functions  
#### ✅ Answer 232: Passing closures to functions in Rust

This example demonstrates how to pass a closure as a parameter to a function. The function `apply` takes a closure and two integers, then calls the closure with those values.

```rust
fn apply<F>(f: F, x: i32, y: i32) -> i32
where
    F: Fn(i32, i32) -> i32,
{
    f(x, y)
}

fn main() {
    let multiply = |a, b| a * b;
    let result = apply(multiply, 4, 5);
    println!("The product is: {}", result);
}
```
