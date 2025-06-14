## 📘 Section: Advanced Traits and Generics  
### 🔹 Category: Newtype Pattern  
#### ✅ Answer 158: Implementing traits for external types using the newtype pattern

The newtype pattern allows you to wrap an external type in your own struct, enabling you to implement traits for it. This is useful when you cannot implement a trait directly for a type you do not own.

```rust
struct MyU32(u32);

trait Double {
    fn double(&self) -> u32;
}

impl Double for MyU32 {
    fn double(&self) -> u32 {
        self.0 * 2
    }
}
```
