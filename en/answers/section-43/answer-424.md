## 📘 Section: Enums and Data Modeling  
### 🔹 Category: Implementing methods on enums  
#### ✅ Answer 424: Implementing methods on enums

You can define methods for enums using an `impl` block. These methods can operate on the enum as a whole or on specific variants.

```rust
enum Status {
    Success,
    Error(String),
}

impl Status {
    fn is_success(&self) -> bool {
        matches!(self, Status::Success)
    }
}

fn main() {
    let s = Status::Success;
    println!("Is success? {}", s.is_success());
}
```
