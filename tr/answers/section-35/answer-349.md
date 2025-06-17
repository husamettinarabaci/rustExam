## 📘 Bölüm: Test ve Hata Ayıklama
### 🔹 Kategori: Kod İnceleme ve Analiz Araçları
#### ✅ Cevap 349: cargo expand veya cargo asm ile kodu inceleme

`cargo expand` aracı, makro genişlemelerini ve otomatik üretilen kodu görmenizi sağlar. Özellikle derive makroları veya procedural macro kullanan kodlarda, derleyicinin ürettiği gerçek kodu incelemek için kullanılır. `cargo asm` ise belirli bir fonksiyonun derlenmiş assembly çıktısını gösterir ve performans analizi veya optimizasyon için faydalıdır.

Örnek kullanım:

```sh
cargo expand
cargo asm my_crate::main
```

Bu komutlar, sırasıyla genişletilmiş Rust kodunu ve derlenmiş assembly kodunu terminalde gösterir.
