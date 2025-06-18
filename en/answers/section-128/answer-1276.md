## 📘 Section: Compile-Time Engines and Metaprogramming
### 🔹 Category: Specialization
#### ✅ Answer 1276: Leveraging specialization for compile-time defaults

Specialization allows you to override trait methods for specific types (nightly only):

```rust
#![feature(specialization)]

trait MyTrait {
    fn value() -> &'static str { "default" }
}

impl<T> MyTrait for T {}

impl MyTrait for u32 {
    fn value() -> &'static str { "u32" }
}

fn main() {
    println!("{}", <u32 as MyTrait>::value()); // prints "u32"
    println!("{}", <i32 as MyTrait>::value()); // prints "default"
}
```

Specialization is only available on nightly Rust.
