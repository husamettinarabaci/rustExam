## 📘 Section: Lifetimes and Borrowing in Practice  
### 🔹 Category: Nested Lifetimes and Struct Methods  
#### ✅ Answer 445: Nested lifetimes and struct methods

This example shows how to use lifetimes in both struct and method definitions to ensure references remain valid.

```rust
struct Container<'a> {
    value: &'a str,
}

impl<'a> Container<'a> {
    fn get_value(&'a self) -> &'a str {
        self.value
    }
}
```
