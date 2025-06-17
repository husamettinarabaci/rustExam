## 📘 Section: Modules and Crate Structure  
### 🔹 Category: Managing Visibility with `pub`, `pub(crate)`, `pub(super)`  
#### ✅ Answer 293: Managing visibility with `pub`, `pub(crate)`, `pub(super)`

This example demonstrates how function visibility is managed in Rust modules using `pub`, `pub(crate)`, and `pub(super)`. `pub` makes a function public, `pub(crate)` restricts it to the current crate, and `pub(super)` exposes it to the parent module only.

```rust
mod one {
    pub fn public_fn() {
        println!("Public function");
    }
    pub(crate) fn crate_fn() {
        println!("Crate-visible function");
    }
    mod two {
        pub(super) fn parent_fn() {
            println!("Visible to parent module only");
        }
    }
}

fn main() {
    one::public_fn(); // Accessible
    one::crate_fn(); // Accessible (same crate)
    // one::two::parent_fn(); // Not accessible: only visible to parent module
    // Note: pub(super) makes the function visible only to the parent module.
}
```
