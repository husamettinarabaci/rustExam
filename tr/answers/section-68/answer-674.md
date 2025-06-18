## 📘 Bölüm: İleri Hata Yönetimi ve Kurtarma
### 🔹 Kategori: Kurtarılabilir hatalar için tekrar deneme mantığı
#### ✅ Cevap 674: Kurtarılabilir hatalar için tekrar deneme mantığı

Tekrar deneme mantığı, kurtarılabilir hatalarda işlemi birden fazla denemenizi sağlar. Pattern matching ile hata tipleri ayırt edilir.

```rust
#[derive(Debug)]
enum Hata {
    Gecici,
    Kalici,
}

fn hata_olabilir(deneme: u32) -> Result<(), Hata> {
    if deneme < 2 {
        Err(Hata::Gecici)
    } else if deneme == 2 {
        Err(Hata::Kalici)
    } else {
        Ok(())
    }
}

fn main() {
    let mut deneme = 0;
    let max = 3;
    loop {
        match hata_olabilir(deneme) {
            Ok(_) => {
                println!("Başarı {}. denemede", deneme + 1);
                break;
            }
            Err(Hata::Gecici) if deneme < max - 1 => {
                println!("Geçici hata, tekrar deneniyor...");
                deneme += 1;
            }
            Err(e) => {
                println!("Başarısız: {:?}", e);
                break;
            }
        }
    }
}
```
