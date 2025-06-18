## 📘 Bölüm: FFI ve Yabancı Arayüzler  
### 🔹 Kategori: Hata Yönetimi ve Güvenlik  
#### ✅ Cevap 607: FFI kodunda hata yönetimi ve güvenlik

FFI'da hata yönetimi için genellikle hata kodları (int) döndürülür. Rust fonksiyonu, hata durumunda negatif veya özel bir kod döndürerek C'ye bilgi verir.

```rust
#[no_mangle]
pub extern "C" fn safe_div(a: i32, b: i32, result: *mut i32) -> i32 {
    if b == 0 {
        return -1; // hata kodu
    }
    unsafe { *result = a / b; }
    0 // başarı
}
```
