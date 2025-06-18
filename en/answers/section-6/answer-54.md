## 📘 Section: Functions II  
### 🔹 Category: Returning Functions  
#### ✅ Answer 54: Function that returns another function

In Rust, you can return closures from functions using the `impl Fn` trait. Here, the outer function returns a closure that squares its input.

```rust
fn make_square() -> impl Fn(i32) -> i32 {
    |x| x * x
}

fn main() {
    let square = make_square();
    let result = square(6);
    println!("Square: {}", result); // Output: Square: 36
}
```
