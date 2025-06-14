## 📚 Section: Traits  
### 🔹 Category: Trait Inheritance  
#### ✅ Answer 98: Trait inheritance

**Explanation:**
Traits can inherit from other traits, requiring implementors to implement all required methods.

```rust
trait Base {
    fn base(&self);
}
trait Sub: Base {
    fn sub(&self);
}

struct MyType;
impl Base for MyType {
    fn base(&self) { println!("Base"); }
}
impl Sub for MyType {
    fn sub(&self) { println!("Sub"); }
}
```
