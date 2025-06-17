## 📘 Section: Closures and Functional Techniques  
### 🔹 Category: Building pipelines with higher-order functions  
#### ✅ Answer 356: Creating a pipeline with closures and functions

This exercise demonstrates how to chain closures and functions to create a processing pipeline in Rust. Each step processes the value and passes it to the next.

```rust
fn add_one(x: i32) -> i32 {
    x + 1
}

fn main() {
    let multiply_by_two = |x: i32| x * 2;
    let subtract_three = |x: i32| x - 3;

    let value = 5;
    let result = subtract_three(multiply_by_two(add_one(value)));
    println!("{}", result); // ((5 + 1) * 2) - 3 = 9
}
```
