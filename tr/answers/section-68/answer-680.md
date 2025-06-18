## 📘 Bölüm: İleri Hata Yönetimi ve Kurtarma
### 🔹 Kategori: Farklı hata tipleri arasında dönüşüm
#### ✅ Cevap 680: Farklı hata tipleri arasında dönüşüm

`From` veya `Into` implementasyonu ile hata tipleri arasında dönüşüm sağlanabilir ve hata iletimi kolaylaşır.

```rust
#[derive(Debug)]
struct AyristirmaHatasi;

#[derive(Debug)]
struct UygulamaHatasi;

impl From<AyristirmaHatasi> for UygulamaHatasi {
    fn from(_: AyristirmaHatasi) -> Self {
        UygulamaHatasi
    }
}

fn ayristir() -> Result<(), AyristirmaHatasi> {
    Err(AyristirmaHatasi)
}

fn calistir() -> Result<(), UygulamaHatasi> {
    ayristir()?;
    Ok(())
}
```
