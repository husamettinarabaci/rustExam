## 📘 Bölüm: FFI ve Yabancı Arayüzler  
### 🔹 Kategori: Rust Kütüphanesini Dışa Aktarma  
#### ✅ Cevap 609: C ve diğer dillerden kullanılabilir Rust kütüphanesi oluşturma

Rust fonksiyonunu C'den çağrılabilir yapmak için `#[no_mangle]` ve `extern "C"` kullanılır. Fonksiyon imzası C ile uyumlu olmalıdır.

```rust
#[no_mangle]
pub extern "C" fn add(a: i32, b: i32) -> i32 {
    a + b
}
```
