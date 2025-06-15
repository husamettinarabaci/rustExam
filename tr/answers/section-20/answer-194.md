## 📘 Bölüm: Hata Yönetimi  
### 🔹 Kategori: Box<dyn Error> ile Dinamik Hatalar  
#### ✅ Cevap 194: Dinamik hatalar için `Box<dyn Error>` kullanımı

`Box<dyn Error>` hata türü olarak kullanıldığında, fonksiyonunuzun farklı hata türlerini döndürmesine olanak tanır ve hata yönetimini esnek hale getirir. Bu, fonksiyonun birden fazla şekilde başarısız olabileceği durumlarda kullanışlıdır.

```rust
use std::error::Error;
use std::fs::File;
use std::io::Read;

fn oku_ve_parse_et(dosya_adi: &str) -> Result<i32, Box<dyn Error>> {
    let mut dosya = File::open(dosya_adi)?;
    let mut icerik = String::new();
    dosya.read_to_string(&mut icerik)?;
    let sayi: i32 = icerik.trim().parse()?;
    Ok(sayi)
}

fn main() {
    match oku_ve_parse_et("input.txt") {
        Ok(n) => println!("Sayı: {}", n),
        Err(e) => println!("Hata: {}", e),
    }
}
```

Bu yaklaşım, farklı hata türlerinin üst seviyeye iletilmesi gereken uygulama ve kütüphanelerde özellikle faydalıdır.
