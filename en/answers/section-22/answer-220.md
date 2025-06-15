## 📘 Section: Generics I  
### 🔹 Category: Generic constraints  
#### ✅ Answer 220: Generic constraints

You can use multiple trait bounds to constrain generic types. Here, `compare_and_display` requires `T: PartialOrd + Display`.

```rust
use std::fmt::Display;

fn compare_and_display<T: PartialOrd + Display>(a: T, b: T) {
    if a > b {
        println!("Greater: {}", a);
    } else {
        println!("Greater: {}", b);
    }
}

fn main() {
    compare_and_display(10, 20);
    compare_and_display("apple", "banana");
}
```
This function works for any type that can be compared and displayed, such as integers and string slices.
