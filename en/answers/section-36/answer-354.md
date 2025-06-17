## 📘 Section: Closures and Functional Techniques  
### 🔹 Category: Returning Closures from Functions  
#### ✅ Answer 354: Returning a closure from a function

This exercise demonstrates how to return a closure from a function in Rust. Closures can capture variables from their environment, and you can return them using `impl Fn` or a boxed trait object. Here, we use `impl Fn` for simplicity.

```rust
fn make_adder(x: i32) -> impl Fn(i32) -> i32 {
    move |y| x + y
}

fn main() {
    let add_five = make_adder(5);
    println!("{}", add_five(3)); // 8
}
```
