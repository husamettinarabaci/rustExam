## 📘 Section: Plugin Architectures  
### 🔹 Category: Dynamic Loading and Plugin Systems  
#### ✅ Answer 1252: Using `libloading` for runtime plugins

To load a plugin at runtime with `libloading`, use the following code. This example locates and calls a function from a shared library.

```rust
use libloading::{Library, Symbol};

fn main() {
    let lib = Library::new("./plugin.so").unwrap();
    unsafe {
        let func: Symbol<unsafe extern fn() -> i32> = lib.get(b"plugin_entry").unwrap();
        println!("Result: {}", func());
    }
}
```

Here, the `plugin_entry` function from `plugin.so` is called and its result is printed to the terminal.
