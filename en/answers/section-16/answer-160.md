## 📘 Section: Advanced Traits and Generics  
### 🔹 Category: Generic Traits  
#### ✅ Answer 160: Implementing generic traits for multiple types

This example demonstrates how to define a generic trait and implement it for both a vector and an array.

```rust
trait Summable {
    fn sum(&self) -> i32;
}

impl Summable for Vec<i32> {
    fn sum(&self) -> i32 {
        self.iter().sum()
    }
}

impl Summable for [i32; 3] {
    fn sum(&self) -> i32 {
        self.iter().sum()
    }
}
```
