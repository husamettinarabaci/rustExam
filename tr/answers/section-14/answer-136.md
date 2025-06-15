## 📘 Bölüm: Modüller II  
### 🔹 Kategori: İç içe Modüller ve Görünürlük  
#### ✅ Cevap 136: `pub(crate)` ve `pub(super)` kullanımı

Rust'ta `pub(crate)` bir öğeyi tüm crate'e, `pub(super)` ise sadece üst modüle görünür yapar. Örnek:

```rust
mod ust {
    pub mod alt {
        pub fn herkese_acik() {
            println!("herkese_acik: her yerden erişilebilir");
        }
        pub(crate) fn crate_geneli() {
            println!("crate_geneli: tüm crate'ten erişilebilir");
        }
        pub(super) fn sadece_ust() {
            println!("sadece_ust: sadece üst modülden erişilebilir");
        }
    }

    pub fn erisim_testi() {
        alt::herkese_acik();      // Tamam
        alt::crate_geneli();      // Tamam
        alt::sadece_ust();        // Tamam (üst modül erişebilir)
    }
}

fn main() {
    ust::alt::herkese_acik();      // Tamam
    ust::alt::crate_geneli();      // Tamam
    // ust::alt::sadece_ust();     // Hata: bu kapsamdan erişilemez
    ust::erisim_testi();
}
```

- `herkese_acik` her yerden erişilebilir.
- `crate_geneli` crate içinden her yerden erişilebilir.
- `sadece_ust` sadece üst modülden erişilebilir, dışarıdan erişilemez.

`main` fonksiyonundan `sadece_ust` fonksiyonunu çağırmak hata verir
