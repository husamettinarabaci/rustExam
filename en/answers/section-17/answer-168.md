## 📘 Section: Advanced Patterns  
### 🔹 Category: Destructuring Tuples in Function Parameters  
#### ✅ Answer 168: Destructuring tuples in function parameters

You can destructure tuples directly in function parameters in Rust. Example:

```rust
fn print_tuple((a, b, c): (i32, i32, i32)) {
    println!("Sum: {}", a + b + c);
    println!("a: {}", a);
    println!("b: {}", b);
    println!("c: {}", c);
}
```

This function destructures the tuple in the parameter list and prints the sum and each value.
