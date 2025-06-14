## 📘 Section: Generics II  
### 🔹 Category: Generic Methods with Lifetimes  
#### ✅ Answer 227: Generic methods with lifetimes

Methods can have both generic type and lifetime parameters to manage references safely.

```rust
struct Holder<'a, T> {
    value: &'a T,
}

impl<'a, T> Holder<'a, T> {
    fn get_ref(&self) -> &'a T {
        self.value
    }
}
```
