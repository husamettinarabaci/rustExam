## 📘 Section: Modules II  
### 🔹 Category: Nested Modules and Visibility  
#### ✅ Answer 136: Using `pub(crate)` and `pub(super)`

In Rust, `pub(crate)` makes an item visible to the entire crate, while `pub(super)` makes it visible to the parent module. Here's an example:

```rust
mod parent {
    pub mod child {
        pub fn public_fn() {
            println!("public_fn: visible everywhere");
        }
        pub(crate) fn crate_fn() {
            println!("crate_fn: visible in the whole crate");
        }
        pub(super) fn super_fn() {
            println!("super_fn: visible in parent module");
        }
    }

    pub fn test_access() {
        child::public_fn();      // OK
        child::crate_fn();       // OK
        child::super_fn();       // OK (parent can access pub(super))
    }
}

fn main() {
    parent::child::public_fn();    // OK
    parent::child::crate_fn();     // OK
    // parent::child::super_fn();  // Error: not visible from here
    parent::test_access();
}
```

- `public_fn` is accessible everywhere.
- `crate_fn` is accessible anywhere in the crate.
- `super_fn` is only accessible from the parent module, not from outside the parent.

Trying to call `super_fn` from `main` will result in a visibility error
