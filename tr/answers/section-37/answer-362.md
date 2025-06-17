## 📘 Bölüm: Modüller ve Görünürlük  
### 🔹 Kategori: Görünürlük ve Erişim Denetimi  
#### ✅ Cevap 362: `pub`, `pub(crate)` ve özel görünürlük kullanımı

Rust'ta modül içindeki fonksiyonların erişim düzeyini `pub`, `pub(crate)` veya varsayılan (özel) olarak belirleyebilirsiniz. `pub` ile işaretlenen fonksiyonlar her yerden erişilebilirken, `pub(crate)` sadece aynı crate içinden erişime izin verir. Varsayılan (özel) fonksiyonlar ise yalnızca tanımlandığı modül içinde erişilebilir.

```rust
mod birinci {
    pub fn herkese_acik() {
        println!("Herkese açık fonksiyon");
    }
    pub(crate) fn sadece_crate_icinde() {
        println!("Sadece crate içinde erişilebilir fonksiyon");
    }
    fn ozel() {
        println!("Sadece bu modülde erişilebilir fonksiyon");
    }
}

fn main() {
    birinci::herkese_acik(); // Erişilebilir
    birinci::sadece_crate_icinde(); // Erişilebilir (aynı crate)
    // birinci::ozel(); // Derleme hatası: fonksiyon özel
}
```
