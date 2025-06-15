## 📘 Section: Closures and Ownership
### 🔹 Category: Closures and Trait Bounds
#### ✅ Answer 247: Closures and trait bounds

In Rust, you can use trait bounds like `Fn`, `FnMut`, or `FnOnce` to accept closures as function parameters. Here is an example using `Fn(i32) -> i32`:

```rust
fn apply_to_5<F>(func: F) -> i32
where
    F: Fn(i32) -> i32,
{
    func(5)
}

fn main() {
    let add_one = |x| x + 1;
    let square = |x| x * x;
    println!("add_one: {}", apply_to_5(add_one)); // Output: add_one: 6
    println!("square: {}", apply_to_5(square));   // Output: square: 25
}
```

This function `apply_to_5` takes any closure or function that implements `Fn(i32) -> i32` and applies it to the value 5. You can use other trait bounds like `FnMut` or `FnOnce` as needed.
