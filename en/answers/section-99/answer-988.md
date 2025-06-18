## 📘 Section: Language Interoperability  
### 🔹 Category: FFI Support Tools and Crates  
#### ✅ Answer 988: Using `ffi-support` and related crates

The `ffi-support` crate makes string conversion and error handling easier in Rust FFI functions.

Cargo.toml:
```toml
[dependencies]
ffi-support = "0.4"
```

Rust side:
```rust
use ffi_support::{rust_string_to_c, FfiStr};

#[no_mangle]
pub extern "C" fn greet(name: FfiStr) -> *mut std::os::raw::c_char {
    let msg = format!("Hello, {}!", name.as_str());
    rust_string_to_c(msg)
}
```

This way, the returned string can be safely used on the C side.
