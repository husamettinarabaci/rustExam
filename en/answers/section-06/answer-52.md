## 📘 Section: Functions II  
### 🔹 Category: Nested Calls  
#### ✅ Answer 52: Nested function calls

In Rust, you can nest function calls by passing the result of one function as an argument to another.

```rust
fn add_one(x: i32) -> i32 {
    x + 1
}

fn double(x: i32) -> i32 {
    x * 2
}

fn main() {
    let result = double(add_one(5));
    println!("Result: {}", result); // Output: 12
}
```
