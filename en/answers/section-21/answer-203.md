## 📘 Section: Macros and Metaprogramming  
### 🔹 Category: Macro Pattern Matching  
#### ✅ Answer 203: Using pattern matching in macros

This macro uses pattern matching to select between minimum and maximum.

```rust
macro_rules! min_or_max {
    ($a:expr, $b:expr, min) => {
        if $a < $b { $a } else { $b }
    };
    ($a:expr, $b:expr, max) => {
        if $a > $b { $a } else { $b }
    };
}

fn main() {
    println!("Min: {}", min_or_max!(3, 7, min));
    println!("Max: {}", min_or_max!(3, 7, max));
}
```
