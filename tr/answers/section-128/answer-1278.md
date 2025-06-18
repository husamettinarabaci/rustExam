## 📘 Bölüm: Derleme Zamanı Motorları ve Metaprogramlama
### 🔹 Kategori: Kodlama Standartlarını Zorlamak
#### ✅ Cevap 1278: Kodlama standartlarını zorlamak için makrolar

Makrolar kodlama standartlarını zorlamak için kullanılabilir. Örnek:

```rust
macro_rules! pub_struct {
    (struct $isim:ident { $(pub $alan:ident : $tip:ty),* $(,)? }) => {
        struct $isim { $(pub $alan: $tip),* }
    };
    (struct $isim:ident { $($kalan:tt)* }) => {
        compile_error!("Tüm alanlar public (pub) olmalı");
    };
}

pub_struct!(struct Kisi { pub ad: String, pub yas: u32 });
// pub_struct!(struct Hatalı { ad: String }); // Bu derlenmez
```

Makro, tüm alanların `pub` olmasını zorlar.
