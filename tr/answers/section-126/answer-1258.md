## 📘 Bölüm: Eklenti Mimarileri  
### 🔹 Kategori: Dinamik Yükleme ve Eklenti Sistemleri  
#### ✅ Cevap 1258: Eklenti iletişimi ve hatalarını hata ayıklama

Ana uygulama ile eklenti arasında veri iletimi için basit tipler veya serileştirilmiş JSON/protobuf kullanılabilir. Hata iletimi için eklenti fonksiyonları hata kodu veya özel bir yapı döndürebilir. Hataların tespiti için loglama, panik yakalama (`catch_unwind`) ve hata kodu kontrolü yapılabilir.

Örnek hata iletimi:
```rust
#[no_mangle]
pub extern "C" fn plugin_run() -> i32 {
    // 0: başarı, 1: hata
    0
}
```

İletişim sırasında tip uyuşmazlığı, bellek yönetimi ve panik gibi sorunlar yaşanabilir. Hata ayıklama için kapsamlı loglama ve testler önerilir.
