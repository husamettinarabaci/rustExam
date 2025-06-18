## 📘 Section: Compiler Plugins and Custom Lints  
### 🔹 Category: Compiler Plugins  
#### ✅ Answer 821: Rust compiler plugins (nightly)

Rust compiler plugins are custom code that can extend or modify the compiler's behavior, available only on Nightly Rust. They are used for custom lints or macros. To write a plugin, you need to enable `#![feature(plugin)]` and related nightly features. Example usage:

```rust
#![feature(plugin)]
#![plugin(my_plugin)]

fn main() {
    // Features provided by my_plugin can be used here
}
```

Note: Most plugin functionality has moved to procedural macros, and compiler plugins are now deprecated.
