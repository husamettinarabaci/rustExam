## 📘 Bölüm: FFI ve Yabancı Arayüzler  
### 🔹 Kategori: FFI ve Çoklu Dil Sorunlarını Hata Ayıklama  
#### ✅ Cevap 610: FFI ve çoklu dil sorunlarını hata ayıklama

FFI'da tip uyumsuzluğu veya hizalama hataları sık görülür. Örneğin, Rust ve C'de struct'ların farklı hizalanması veri bozulmasına yol açabilir. Hata ayıklamak için `#[repr(C)]` kullanın ve `gdb`, `valgrind` gibi araçlarla bellek erişimini izleyin.

```rust
#[repr(C)]
pub struct Data {
    pub a: u8,
    pub b: u32,
}
```

// C tarafında aynı hizalamayı sağladığınızdan emin olun.
