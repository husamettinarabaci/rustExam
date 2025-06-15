## 📘 Section: Closures and Iterator Basics  
### 🔹 Category: Defining and Calling a Closure  
#### ✅ Answer 231: Defining and calling a closure in Rust

This example shows how to define a closure that adds two integers and how to call it. Closures in Rust are anonymous functions that can capture variables from their environment.

```rust
fn main() {
    let add = |a: i32, b: i32| a + b;
    let result = add(5, 7);
    println!("The sum is: {}", result);
}
```
