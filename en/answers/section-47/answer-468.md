## 📘 Section: Workspace and Package Organization
### 🔹 Category: Using `mod`, `use`, and `super` effectively
#### ✅ Answer 468: Using `mod`, `use`, and `super` effectively

You can create multiple modules in a crate and use `mod`, `use`, and `super` for inter-module access.

```rust
mod a {
    pub fn foo() {}
    pub mod b {
        pub fn bar() {
            super::foo();
        }
    }
}

use a::b::bar;

fn main() {
    bar();
}
```

This structure improves inter-module access and code readability.
