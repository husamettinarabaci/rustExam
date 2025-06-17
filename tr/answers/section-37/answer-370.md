## 📘 Bölüm: Modüller ve Görünürlük  
### 🔹 Kategori: Kütüphane Tarzı Crate Yapısı  
#### ✅ Cevap 370: Kütüphane tarzı crate yapısı oluşturma

Rust'ta kütüphane tarzı bir crate yapısı oluşturmak, kodunuzu modüler, yeniden kullanılabilir ve test edilebilir hale getirir. Bu yapıda genellikle bir `src/lib.rs` dosyası bulunur ve tüm modüller burada tanımlanır veya dışa aktarılır. Her modül ayrı bir dosyada veya klasörde tutulabilir. Bu sayede hem iç modüller hem de dışa açık API'ler net bir şekilde ayrılır.

Aşağıda örnek bir kütüphane tarzı crate dizin yapısı ve temel modül organizasyonu gösterilmiştir:

```rust
// src/lib.rs
pub mod math;
pub mod utils;

// src/math.rs
pub fn add(a: i32, b: i32) -> i32 {
    a + b
}

// src/utils.rs
pub fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}
```

Bu yapıda, `lib.rs` dosyası kütüphanenin giriş noktasıdır ve diğer modülleri dışa açar. Kullanıcılar sadece kütüphaneyi ekleyerek `math::add` veya `utils::greet` fonksiyonlarını kullanabilirler.
