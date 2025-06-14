## 📘 Bölüm: Güvensiz Rust ve İleri Özellikler  
### 🔹 Kategori: Volatile İşlemler  
#### ✅ Cevap 197: Volatile bellek işlemleri gerçekleştirme

Volatile işlemler, donanım veya bellek eşlemeli I/O ile çalışırken derleyicinin okuma/yazma işlemlerini optimize etmemesi gerektiğinde kullanılır.

```rust
fn volatile_yaz(ptr: *mut u32, deger: u32) {
    unsafe {
        std::ptr::write_volatile(ptr, deger);
    }
}
```
