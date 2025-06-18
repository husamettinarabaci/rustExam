## 📘 Section: FFI and Foreign Interfacing  
### 🔹 Category: Automatic Binding Generation  
#### ✅ Answer 605: Using `bindgen` to generate bindings automatically

`bindgen` generates Rust FFI bindings from C header files. It can be used from the command line or in a build.rs script.

Example usage:

```sh
bindgen wrapper.h -o bindings.rs
```

Rust build.rs example:
```rust
fn main() {
    bindgen::Builder::default()
        .header("wrapper.h")
        .generate()
        .expect("Unable to generate bindings")
        .write_to_file("bindings.rs")
        .expect("Couldn't write bindings!");
}
```
