## 📘 Section: Plugin Architectures  
### 🔹 Category: Dynamic Loading and Plugin Systems  
#### ✅ Answer 1254: Safe plugin interfaces and ABI compatibility

In Rust, a safe plugin interface uses the C ABI (`extern "C"`) and data structures marked with `#[repr(C)]` to ensure compatibility. Prefer simple types for FFI. Avoid changing the interface to maintain compatibility across Rust versions and compilers.

Example:
```rust
#[repr(C)]
pub struct PluginApi {
    pub version: u32,
    pub process: extern "C" fn(i32) -> i32,
}

#[no_mangle]
pub extern "C" fn get_plugin_api() -> *const PluginApi {
    &PLUGIN_API
}
```

The main app loads this interface and calls functions safely. Follow semver and avoid breaking changes to keep compatibility.
