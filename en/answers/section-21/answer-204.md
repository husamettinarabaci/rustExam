## 📘 Section: Macros and Metaprogramming  
### 🔹 Category: Recursive Macros  
#### ✅ Answer 204: Writing a recursive macro

This macro recursively sums any number of arguments.

```rust
macro_rules! sum {
    ($a:expr) => ($a);
    ($a:expr, $($rest:expr),+) => ($a + sum!($($rest),+));
}

fn main() {
    println!("Sum: {}", sum!(1, 2, 3, 4));
}
```
