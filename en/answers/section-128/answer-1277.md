## 📘 Section: Compile-Time Engines and Metaprogramming
### 🔹 Category: Build Scripts
#### ✅ Answer 1277: Generating code with build scripts (`build.rs`)

You can generate code at compile time using a build script:

`build.rs`:
```rust
use std::fs;
fn main() {
    fs::write("src/generated.rs", "pub const VALUE: u32 = 42;").unwrap();
}
```

`main.rs`:
```rust
include!("generated.rs");
fn main() {
    println!("VALUE = {}", VALUE);
}
```

The build script creates `generated.rs` before compilation.
