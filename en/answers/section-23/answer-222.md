## 📘 Section: Generics II  
### 🔹 Category: Generic trait bounds  
#### ✅ Answer 222: Generic trait bounds

You can use trait bounds to restrict generic types. Here, `sum_and_display` requires `T: Add<Output = T> + Display`.

```rust
use std::ops::Add;
use std::fmt::Display;

fn sum_and_display<T: Add<Output = T> + Display>(a: T, b: T) {
    let sum = a + b;
    println!("Sum: {}", sum);
}

fn main() {
    sum_and_display(5, 7);
    sum_and_display(2.5, 3.5);
}
```
This function works for any type that supports addition and can be displayed, such as integers and floats.
