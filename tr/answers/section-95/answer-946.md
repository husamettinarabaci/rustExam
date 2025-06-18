## 📘 Bölüm: Metaprogramlama ve Yansıma
### 🔹 Kategori: Makrolarla Şablon Kodu Otomatikleştirme
#### ✅ Cevap 946: Makrolarla şablon kodu otomatikleştirme

Şablon kod, ortak desenler için tekrar tekrar yazılan koddur (ör. trait implementasyonu, erişimci fonksiyonları). Rust makroları, bu kodu otomatik üreterek tekrar ve hata riskini azaltır.

Örnek: Birden fazla tip için `Display` trait'ini implement eden makro:

```rust
macro_rules! display_impl {
    ($($t:ty),*) => {
        $(
            impl std::fmt::Display for $t {
                fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
                    write!(f, stringify!($t))
                }
            }
        )*
    };
}

display_impl!(Kullanici, Urun);
```

Avantajlar: daha az kod, daha az hata, kolay bakım. Dezavantajlar: hata ayıklama zorlaşır, kodun açıklığı azalır, yanlış kullanımda anlaşılması güç hatalar oluşabilir.
