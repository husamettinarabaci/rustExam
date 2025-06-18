## 📘 Section: Advanced Trait Design and Usage
### 🔹 Category: Newtype Pattern for External Traits
#### ✅ Answer 627: Newtype pattern to implement external traits

The newtype pattern allows you to implement external traits for external types by wrapping the type in a local struct. This is necessary due to Rust's orphan rule, which prevents implementing foreign traits for foreign types directly.

```rust
struct MyString(String);

trait MyTrait {
    fn shout(&self);
}

impl MyTrait for MyString {
    fn shout(&self) {
        println!("{}!", self.0.to_uppercase());
    }
}

fn main() {
    let s = MyString("hello".to_string());
    s.shout();
}
```
