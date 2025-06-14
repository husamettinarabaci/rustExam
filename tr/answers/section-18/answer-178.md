## 📘 Bölüm: Hata Yönetimi ve Result Tipleri  
### 🔹 Kategori: Hata Dönüşümü için `From` Trait'i  
#### ✅ Cevap 178: Hata dönüşümü için `From` trait'inin kullanımı

Bu örnek, özel hata tipleri arasında dönüşüm yapmak için `From` trait'inin nasıl kullanılacağını gösterir.

```rust
#[derive(Debug)]
enum KucukHata {
    Onemsiz,
}

#[derive(Debug)]
enum BuyukHata {
    Kucuk(KucukHata),
}

impl From<KucukHata> for BuyukHata {
    fn from(e: KucukHata) -> Self {
        BuyukHata::Kucuk(e)
    }
}

fn is_yap() -> Result<(), BuyukHata> {
    let res: Result<(), KucukHata> = Err(KucukHata::Onemsiz);
    res.map_err(BuyukHata::from)
}
```
