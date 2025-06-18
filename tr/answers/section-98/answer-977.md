## 📘 Bölüm: Profil ve Performans Ayarı  
### 🔹 Kategori: Binary Şişkinliğini Analiz Etme  
#### ✅ Cevap 977: `cargo-bloat` ile binary şişkinliğini analiz etme

`cargo-bloat`, bir Rust binary'sinde hangi fonksiyonların ve modüllerin en fazla yer kapladığını gösterir. Kurulum ve kullanım örneği:

Terminalde:
```
cargo install cargo-bloat
cargo bloat --release
```
Çıktıda, en büyük fonksiyonlar ve modüller listelenir. Bu bilgilerle gereksiz kodları tespit edip binary boyutunu azaltabilirsiniz.
