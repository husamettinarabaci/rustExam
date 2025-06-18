## 📘 Section: Advanced Trait System and Coherence  
### 🔹 Category: Trait Aliases and Bound Simplification  
#### ✅ Answer 724: Defining and using trait aliases to simplify complex bounds

Trait aliases (currently a nightly feature) allow you to group multiple trait bounds under a single name, making generic signatures easier to read and maintain. Here, we define a trait alias for `Debug + Clone + Default` and use it in a generic function.

```rust
#![feature(trait_alias)]
use std::fmt::Debug;

trait MyAlias = Debug + Clone + Default;

fn print_and_clone<T: MyAlias>(value: T) {
    println!("{:?}", value);
    let _clone = value.clone();
}

fn main() {
    let x = 42u32;
    print_and_clone(x);
}
```
