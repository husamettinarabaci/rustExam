## 📘 Bölüm: Modüller ve Crate Yapısı  
### 🔹 Kategori: Modül Tanımı ve İthalatı  
#### ✅ Cevap 291: `mod` ve `use` ile modül tanımlama ve ithalatı

Bu soruda, Rust'ta modül tanımlama ve modül içindeki bir fonksiyonu ana fonksiyonda çağırma gösterilmektedir. `mod` anahtar kelimesiyle modül tanımlanır, `use` ile modül içindeki fonksiyon ana kapsamda kullanıma alınır.

```rust
mod selam {
    pub fn merhaba() {
        println!("Merhaba, modülden selamlar!");
    }
}

use selam::merhaba;

fn main() {
    merhaba();
}
```
