## 📘 Section: Advanced Trait System and Coherence  
### 🔹 Category: Using negative trait bounds with `#![feature(negative_impls)]` (nightly only)  
#### ✅ Answer 723: Using negative trait bounds with `#![feature(negative_impls)]` (nightly only)

Negative trait bounds allow you to specify that a type does not implement a trait. This feature is only available on nightly Rust with `#![feature(negative_impls)]`.

```rust
#![feature(negative_impls)]

trait MyTrait {}

struct NotImpl;

impl !MyTrait for NotImpl {}

fn needs_mytrait<T: MyTrait>(_t: T) {
    println!("MyTrait is implemented.");
}

fn main() {
    // needs_mytrait(NotImpl); // Compile error: NotImpl does not implement MyTrait
}
```

Here, `impl !MyTrait for NotImpl {}` means NotImpl will never implement MyTrait. This only works on nightly Rust.
