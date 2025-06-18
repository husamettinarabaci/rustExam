## 📘 Section: Advanced Trait System and Coherence  
### 🔹 Category: Implementing traits with complex bounds and `where` clauses  
#### ✅ Answer 721: Implementing traits with complex bounds and `where` clauses

Below is an example of a function with multiple trait bounds, using a `where` clause for clarity.

```rust
fn print_sum<T, U>(a: T, b: U)
where
    T: std::fmt::Display + std::ops::Add<U, Output = T>,
    U: std::fmt::Display,
{
    let sum = a + b;
    println!("Sum: {}", sum);
}

fn main() {
    print_sum(3, 4);
    print_sum(1.5, 2.5);
}
```

The `where` clause separates trait bounds from the function signature, improving readability.
