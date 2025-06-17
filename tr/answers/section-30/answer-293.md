## 📘 Bölüm: Modüller ve Crate Yapısı  
### 🔹 Kategori: Görünürlük Yönetimi  
#### ✅ Cevap 293: `pub`, `pub(crate)`, `pub(super)` ile görünürlük yönetimi

Bu örnekte, Rust'ta modüllerde farklı görünürlük anahtar kelimeleriyle fonksiyonların erişim kapsamı gösterilmektedir. `pub` herkese açık, `pub(crate)` sadece crate içinde, `pub(super)` ise üst modüle açıktır.

```rust
mod bir {
    pub fn herkese_acik() {
        println!("Herkese açık fonksiyon");
    }
    pub(crate) fn sadece_crate() {
        println!("Sadece crate içinde erişilebilir fonksiyon");
    }
    mod iki {
        pub(super) fn ust_modul() {
            println!("Sadece üst modüle açık fonksiyon");
        }
    }
}

fn main() {
    bir::herkese_acik(); // Erişilebilir
    bir::sadece_crate(); // Erişilebilir (aynı crate)
    // bir::iki::ust_modul(); // Erişilemez: sadece üst modüle açık
    // Açıklama: pub(super) ile tanımlanan fonksiyon, sadece bir üst modülden erişilebilir.
}
```
