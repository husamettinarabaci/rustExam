## 📘 Bölüm: Modüller ve Crate Yapısı  
### 🔹 Kategori: Harici Bağımlılıklar  
#### ❓ Soru 296: `Cargo.toml`'da harici bağımlılıkları tanımlama

Aşağıdaki adımları izleyerek bir Rust projesinde harici bir crate'i nasıl ekleyip kullandığınızı gösteren bir örnek oluşturun:

- `Cargo.toml` dosyasına `rand` crate'ini ekleyin (örneğin, `rand = "0.8"`).
- Ana dosyada (`main.rs`), `rand` crate'inden bir fonksiyonu (`rand::random::<u8>()`) kullanarak rastgele bir sayı üretin.
- Üretilen rastgele sayıyı terminale yazdırın.

🔧 **Görev:** Harici bir crate'i `Cargo.toml` dosyasına ekleyip kodda kullanmayı gösterin.
