## 📘 Section: Testing and Debugging  
### 🔹 Category: Debugging Tools  
#### ✅ Answer 458: Debugging with `dbg!`, `println!`, and IDE tools

The `dbg!` and `println!` macros are used to inspect values at runtime. IDEs provide advanced debugging features like breakpoints and step execution.

```rust
fn sum(a: i32, b: i32) -> i32 {
    dbg!(a);
    println!("b: {}", b);
    a + b
}

fn main() {
    let result = sum(2, 3);
    println!("Result: {}", result);
}
```

In IDEs, you can set breakpoints and step through code interactively.
