## 📘 Bölüm: Modüller II  
### 🔹 Kategori: İç içe Modüller ve Görünürlük  
#### ✅ Cevap 135: İç içe modüller ve görünürlük

Rust'ta iç içe modüller, kodunuzu hiyerarşik olarak düzenlemenizi sağlar. Varsayılan olarak, bir modüldeki öğeler yalnızca üst modüle özeldir. `pub` ile bir öğeyi dışarıya, `pub(crate)` ile sadece mevcut crate'e görünür yapabilirsiniz. Örnek:

```rust
mod dis {
    pub mod ic {
        pub fn herkese_acik() {
            println!("Bu, iç modülde herkese açık bir fonksiyon");
        }
        fn ozel_fonksiyon() {
            println!("Bu, iç modülde özel bir fonksiyon");
        }
        pub(crate) fn crate_icinde() {
            println!("Bu fonksiyon sadece crate içinde erişilebilir");
        }
    }
}

fn main() {
    // Erişilebilir: herkese_acik fonksiyonu
    dis::ic::herkese_acik();
    // Erişilemez: ozel_fonksiyon() özel
    // dis::ic::ozel_fonksiyon(); // Hata
    // Crate içinde erişilebilir: crate_icinde()
    dis::ic::crate_icinde();
}
```

- `pub` ile `herkese_acik` dışarıdan erişilebilir.
- `ozel_fonksiyon` sadece `ic` modülünde erişilebilir.
- `pub(crate)` ile `crate_icinde` fonksiyonu sadece aynı crate içinde erişilebilir, dışarıdan erişilemez.
