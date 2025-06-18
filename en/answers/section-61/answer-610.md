## 📘 Section: FFI and Foreign Interfacing  
### 🔹 Category: Debugging FFI and Cross-Language Issues  
#### ✅ Answer 610: Debugging FFI and cross-language issues

Type mismatches or alignment errors are common in FFI. For example, different struct alignment in Rust and C can cause data corruption. Use `#[repr(C)]` and tools like `gdb` or `valgrind` to debug memory access.

```rust
#[repr(C)]
pub struct Data {
    pub a: u8,
    pub b: u32,
}
```

// Make sure the C side uses the same alignment.
