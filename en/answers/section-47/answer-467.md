## 📘 Section: Workspace and Package Organization
### 🔹 Category: Re-exporting types with `pub use`
#### ✅ Answer 467: Re-exporting types with `pub use`

You can re-export a type defined in one module from another using `pub use`, allowing direct access from the main module.

```rust
mod inner {
    pub struct MyType;
}
pub use inner::MyType;

fn main() {
    let _ = MyType;
}
```

This approach simplifies the module structure and makes the public API easier to manage.
