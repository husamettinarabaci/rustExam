## 📘 Section: Lifetimes and Borrowing in Practice  
### 🔹 Category: Lifetime Bounds in Traits  
#### ✅ Answer 447: Lifetime bounds in trait implementations

This example shows how to use lifetime bounds in trait implementations to ensure references are valid for the required lifetime.

```rust
struct RefHolder<'a> {
    data: &'a str,
}

trait Printable {
    fn print(&self);
}

impl<'a> Printable for RefHolder<'a> {
    fn print(&self) {
        println!("{}", self.data);
    }
}
```
