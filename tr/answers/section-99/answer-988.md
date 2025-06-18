## 📘 Bölüm: Dil Arası Çalışabilirlik  
### 🔹 Kategori: FFI Destek Araçları ve Crate'ler  
#### ✅ Cevap 988: `ffi-support` ve ilgili crate'ler kullanımı

`ffi-support` crate'i, Rust FFI fonksiyonlarında string dönüşümü ve hata yönetimini kolaylaştırır.

Cargo.toml:
```toml
[dependencies]
ffi-support = "0.4"
```

Rust tarafı:
```rust
use ffi_support::{rust_string_to_c, FfiStr};

#[no_mangle]
pub extern "C" fn greet(name: FfiStr) -> *mut std::os::raw::c_char {
    let msg = format!("Hello, {}!", name.as_str());
    rust_string_to_c(msg)
}
```

Bu şekilde, C tarafında dönen string güvenli şekilde kullanılabilir.
