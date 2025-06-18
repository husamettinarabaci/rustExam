## 📘 Section: Language Interoperability  
### 🔹 Category: FFI and Multi-language Calls  
#### ✅ Answer 981: Calling Rust from other languages (C, Python, Java)

To call a Rust function from another language, use an FFI interface with `extern "C"`. For example, to call from C:

Rust side:
```rust
#[no_mangle]
pub extern "C" fn add(a: i32, b: i32) -> i32 {
    a + b
}
```

C side:
```c
extern int add(int a, int b);
int main() {
    int result = add(2, 3);
}
```

For Python, you can use `cffi` or `ctypes` to call the same function.
