## 📘 Bölüm: Dil Arası Çalışabilirlik  
### 🔹 Kategori: Dil Sınırlarında Hata Yönetimi  
#### ✅ Cevap 986: Dil sınırlarında hata yönetimi

Rust fonksiyonundan hata döndürmek için genellikle bir hata kodu veya null pointer kullanılır. C tarafında bu kod kontrol edilir.

Rust tarafı:
```rust
#[no_mangle]
pub extern "C" fn divide(a: i32, b: i32, result: *mut i32) -> i32 {
    if b == 0 {
        return -1; // hata kodu
    }
    unsafe { *result = a / b; }
    0 // başarı
}
```

C tarafı:
```c
int res;
if (divide(10, 0, &res) != 0) {
    // hata yönetimi
}
```
Python'da da benzer şekilde hata kodu kontrol edilir.
