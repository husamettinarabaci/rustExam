## 📘 Section: Functions II  
### 🔹 Category: Closures as Parameters  
#### ✅ Answer 55: Function with closure as parameter

You can pass closures as parameters using generics and the `Fn` trait. Here, a function takes a closure and applies it to a value.

```rust
fn apply_to_ten<F>(f: F) -> i32
where
    F: Fn(i32) -> i32,
{
    f(10)
}

fn main() {
    let result = apply_to_ten(|x| x * 3);
    println!("Result: {}", result); // Output: Result: 30
}
```
