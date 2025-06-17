## 📘 Section: Lifetimes and Borrowing Semantics  
### 🔹 Category: Struct methods with multiple lifetime parameters  
#### ✅ Answer 268: Struct methods with multiple lifetime parameters

Using multiple lifetime parameters in struct methods is necessary when working with references that may have different lifetimes. This allows the method to handle references independently, such as when returning either a field reference or a parameter reference.

In the following example, a struct and a method use two different lifetime parameters:

```rust
struct Container<'a> {
    value: &'a str,
}

impl<'a> Container<'a> {
    fn select<'b>(&'b self, other: &'b str) -> &'b str {
        if self.value.len() > other.len() {
            self.value
        } else {
            other
        }
    }
}
```

Here, the `Container` struct holds a reference with lifetime `'a`. The `select` method uses a separate `'b` lifetime for both `self` and the `other` parameter, allowing flexibility when working with references of different lifetimes.
