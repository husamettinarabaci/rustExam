## 📘 Section: Advanced Patterns  
### 🔹 Category: Matching on Slices and Arrays  
#### ✅ Answer 167: Matching on slices and arrays

You can use pattern matching on slices and arrays in Rust to handle different cases. Example:

```rust
fn describe_slice(slice: &[i32]) {
    match slice {
        [] => println!("Empty"),
        [x] => println!("Single element: {}", x),
        [1, .., 9] => println!("Starts with 1 and ends with 9"),
        _ => println!("Other"),
    }
}
```

This function demonstrates how to match on slice patterns, including empty, single, and specific start/end values.
