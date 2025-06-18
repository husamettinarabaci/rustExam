## 📘 Section: Functions II  
### 🔹 Category: Closures as Parameters  
#### ✅ Answer 55: Function with closure as parameter

Closures can be passed directly as parameters to functions. Below is a simple example of a function that takes a closure as a parameter and applies it to an integer.

```rust
fn apply(f: &dyn Fn(i32) -> i32) -> i32 {
    f(10)
}

fn main() {
    let result = apply(&|x| x * 2);
    println!("Result: {}", result); // Output: Result: 20
}
```
