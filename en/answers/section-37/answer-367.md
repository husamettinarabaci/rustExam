## 📘 Section: Modules and Visibility  
### 🔹 Category: module entry file (mod.rs) usage  
#### ✅ Answer 367: module entry file (mod.rs) usage

In Rust, when a module consists of multiple files in a folder, a `mod.rs` file acts as the main entry point. The `mod.rs` file includes submodules and can re-export items. The main file can then use the re-exported function.

Example folder structure:
```
src/
  main.rs
  mymod/
    mod.rs
    foo.rs
    bar.rs
```

`mymod/mod.rs`:
```rust
pub mod foo;
pub mod bar;

pub use foo::foo_hello;
```

`mymod/foo.rs`:
```rust
pub fn foo_hello() {
    println!("Hello from foo!");
}
```

`mymod/bar.rs`:
```rust
pub fn bar_hello() {
    println!("Hello from bar!");
}
```

`main.rs`:
```rust
mod mymod;

fn main() {
    mymod::foo_hello();
}
```
