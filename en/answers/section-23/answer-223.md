## 📘 Section: Generics II  
### 🔹 Category: Generic where clauses  
#### ✅ Answer 223: Generic where clauses

A `where` clause can be used to specify trait bounds for generic types. Here, `max_and_display` uses a `where` clause for `T: PartialOrd + Display`.

```rust
use std::fmt::Display;

fn max_and_display<T>(a: T, b: T)
where
    T: PartialOrd + Display,
{
    if a > b {
        println!("Max: {}", a);
    } else {
        println!("Max: {}", b);
    }
}

fn main() {
    max_and_display(10, 20);
    max_and_display("apple", "banana");
}
```
This function works for any type that can be compared and displayed, such as integers and string slices.
