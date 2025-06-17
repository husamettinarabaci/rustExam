## 📘 Section: Modules and Visibility  
### 🔹 Category: Avoiding circular dependencies with modular design  
#### ✅ Answer 369: Avoiding circular dependencies with modular design

In Rust, if two modules directly depend on each other, a circular dependency occurs and the compiler will produce an error. This happens because the modules try to resolve each other at the same time. Below are incorrect and correct modular design examples.

Incorrect (Circular Dependency):
```rust
// mod_a.rs
use crate::mod_b; // depends on mod_b

// mod_b.rs
use crate::mod_a; // depends on mod_a
```
This will result in a compiler error such as "unresolved import" or "cycle detected".

Correct (Eliminating the Dependency):
You can use a shared module or trait to make dependencies one-way:
```rust
// common.rs
pub trait Common {
    fn common_fn(&self);
}

// mod_a.rs
use crate::common::Common;
pub struct A;
impl Common for A {
    fn common_fn(&self) {
        println!("Common function from A");
    }
}

// mod_b.rs
use crate::common::Common;
pub struct B;
impl Common for B {
    fn common_fn(&self) {
        println!("Common function from B");
    }
}
```
This way, both `mod_a` and `mod_b` only depend on the `common` module, and no circular dependency occurs.
