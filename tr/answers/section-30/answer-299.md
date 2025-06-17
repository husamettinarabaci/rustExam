## 📘 Bölüm: Modüller ve Crate Yapısı  
### 🔹 Kategori: Modüller ve herkese açık API'ler için dokümantasyon  
#### ✅ Cevap 299: Modüller ve herkese açık API'ler için dokümantasyon

Rust'ta modüller ve herkese açık API'ler için dokümantasyon yazmak, kodunuzu başkalarına ve gelecekteki size daha anlaşılır kılar. Satır içi dokümantasyon için `///`, modül başı veya crate başı dokümantasyon için ise `//!` kullanılır. `cargo doc` komutu ile HTML dokümantasyonu oluşturulabilir.

```rust
//! Bu, modül başı dokümantasyon örneğidir.

/// Toplama işlemi yapan fonksiyon.
///
/// İki sayıyı toplar ve sonucu döndürür.
///
/// # Örnek
/// ```
/// let sonuc = my_crate::topla(2, 3);
/// assert_eq!(sonuc, 5);
/// ```
pub fn topla(a: i32, b: i32) -> i32 {
    a + b
}
```

- `cargo doc --open` komutu ile dokümantasyon tarayıcıda görüntülenebilir.
- `///` fonksiyon, struct, enum gibi öğeler için kullanılırken, `//!` modül veya crate başında genel açıklama için kullanılır.
