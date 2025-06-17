## 📘 Section: Closures and Functional Techniques  
### 🔹 Category: Closure Basics  
#### ✅ Answer 353: Introduction to closures

Closures can be defined and called similarly to functions. In this example, a closure takes a parameter, multiplies it by two, and returns the result.

```rust
fn main() {
    let double = |x: i32| x * 2;
    let result = double(5);
    println!("Result: {}", result);
}
```
