## 📘 Bölüm: İleri Makro Tasarımı  
### 🔹 Kategori: Kullanıcılar için makro dokümantasyonu  
#### ✅ Cevap 818: Kullanıcılar için makro dokümantasyonu

Aşağıda, kullanıcı dostu dokümantasyon ve örnekle birlikte bir makro açıklaması verilmiştir.

```rust
/// `repeat_n!` makrosu, bir ifadeyi n kez tekrarlar.
///
/// # Kullanım
///
/// ```rust
/// repeat_n!(println!("Merhaba!"), 3);
/// // Çıktı:
/// // Merhaba!
/// // Merhaba!
/// // Merhaba!
/// ```
///
/// # Sınırlamalar
/// n pozitif bir tamsayı olmalıdır.
#[macro_export]
macro_rules! repeat_n {
    ($expr:expr, $n:expr) => {{
        for _ in 0..$n { $expr; }
    }};
}
```

Bu makro, verilen ifadeyi n kez tekrarlar. Kullanıcıya örnek ve sınırlarıyla birlikte açıklanmıştır.
