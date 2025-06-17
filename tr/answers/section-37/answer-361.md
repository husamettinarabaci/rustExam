## 📘 Bölüm: Modüller ve Görünürlük  
### 🔹 Kategori: mod ile modül oluşturma  
#### ✅ Cevap 361: mod ile modül oluşturma ve içerik tanımlama

Bu örnekte, aynı dosyada bir modül tanımlanır ve modül içinde bir fonksiyon oluşturulur. Ana fonksiyondan bu fonksiyon çağrılarak modül kullanımı gösterilir.

```rust
mod selam {
    pub fn yazdir() {
        println!("Merhaba, modül!");
    }
}

fn main() {
    selam::yazdir();
}
```
