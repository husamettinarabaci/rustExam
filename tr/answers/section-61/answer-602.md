## 📘 Bölüm: FFI ve Yabancı Arayüzler  
### 🔹 Kategori: String ve Dizi Aktarımı  
#### ✅ Cevap 602: FFI sınırlarında string ve dizi aktarma

Rust ve C arasında string aktarımı için genellikle C'nin null sonlandırmalı stringleri (`*const c_char`) kullanılır. Rust'ta `CString` ve `CStr` tipleri ile güvenli dönüşüm sağlanır.

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
