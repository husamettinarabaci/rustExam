## 📘 Bölüm: Eklenti Mimarileri  
### 🔹 Kategori: Dinamik Yükleme ve Eklenti Sistemleri  
#### ✅ Cevap 1254: Güvenli eklenti arayüzleri ve ABI uyumluluğu

Rust'ta güvenli eklenti arayüzü için C ABI (`extern "C"`) kullanılır ve veri yapıları `#[repr(C)]` ile tanımlanır. Böylece farklı derleyici ayarlarında ve sürümlerde uyumluluk sağlanır. Karmaşık veri tipleri yerine temel tipler tercih edilmelidir.

Örnek:
```rust
#[repr(C)]
pub struct PluginApi {
    pub version: u32,
    pub process: extern "C" fn(i32) -> i32,
}

#[no_mangle]
pub extern "C" fn get_plugin_api() -> *const PluginApi {
    &PLUGIN_API
}
```

Ana uygulama bu arayüzü yükleyip fonksiyonları güvenli şekilde çağırabilir. Farklı Rust sürümlerinde uyumluluk için arayüzde değişiklik yapılmamalı ve semver kurallarına uyulmalıdır.
