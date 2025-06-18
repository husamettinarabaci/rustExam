## 📘 Section: FFI and Foreign Interfacing  
### 🔹 Category: String and Array Transfer  
#### ✅ Answer 602: Passing strings and arrays across FFI boundaries

To transfer strings between Rust and C, use C's null-terminated strings (`*const c_char`). Rust provides `CString` and `CStr` for safe conversion.

```rust
use std::ffi::{CString, CStr};
use std::os::raw::c_char;

extern "C" {
    fn print_c_string(s: *const c_char);
}

fn main() {
    let msg = CString::new("Hello from Rust!").unwrap();
    unsafe {
        print_c_string(msg.as_ptr());
    }
}
```
