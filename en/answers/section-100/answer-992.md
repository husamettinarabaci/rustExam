## 📘 Section: Future Rust and Experimental Features  
### 🔹 Category: Const Generics and GATs  
#### ✅ Answer 992: Using `const generics` and generic associated types

Const generics and generic associated types (GATs) are powerful features available on nightly Rust. They allow you to write more flexible and type-safe abstractions.

Example: Using const generics to define an array wrapper with a generic length.

```rust
#![feature(const_generics)]

struct ArrayWrapper<T, const N: usize> {
    data: [T; N],
}

impl<T, const N: usize> ArrayWrapper<T, N> {
    fn new(data: [T; N]) -> Self {
        ArrayWrapper { data }
    }
    fn len(&self) -> usize {
        N
    }
}

fn main() {
    let arr = ArrayWrapper::new([1, 2, 3]);
    println!("Length: {}", arr.len());
}
```

To run this code:
- Save as `main.rs`.
- Compile and run with: `cargo +nightly run` or `rustc +nightly main.rs && ./main`.

This demonstrates how const generics can be used to parameterize types by constant values.
