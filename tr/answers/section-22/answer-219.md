## 📘 Bölüm: Traitler I  
### 🔹 Kategori: Blanket Implementasyonlar  
#### ✅ Cevap 219: Blanket implementasyonlar

Blanket implementasyon, belirli trait'leri sağlayan tüm tipler için trait implementasyonu yapmaktır.

```rust
trait BenimTraitim {
    fn yap(&self);
}

impl<T: std::fmt::Debug> BenimTraitim for T {
    fn yap(&self) {
        println!("{:?}", self);
    }
}
```

Bu sayede `Debug` trait'ini uygulayan her tip `yap()` metodunu kullanabilir.
