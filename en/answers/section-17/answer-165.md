## 📘 Section: Advanced Patterns  
### 🔹 Category: Using `ref` and `ref mut` in Patterns  
#### ✅ Answer 165: Using `ref` and `ref mut` in patterns

You can use `ref` and `ref mut` in Rust patterns to create references and mutable references. Example:

```rust
fn handle_tuple(mut t: (i32, i32)) {
    match t {
        (ref first, _) if *first > 0 => println!("First (by ref): {}", first),
        (_, ref mut second) if *second < 0 => {
            *second += 1;
            println!("Second (by ref mut, incremented): {}", second);
        }
        (first, second) => println!("First: {}, Second: {}", first, second),
    }
}
```

This function demonstrates how to use `ref` and `ref mut` in pattern matching with tuples.
