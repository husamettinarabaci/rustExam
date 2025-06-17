## 📘 Bölüm: Ömürler ve Ödünç Alma Pratiği  
### 🔹 Kategori: Ömür Güvenli API'ler Tasarlama  
#### ✅ Cevap 450: Ömür güvenli API'ler tasarlama

Ömür güvenli API'ler, geçersiz referans döndürmeyi önler. Aşağıda ömür parametreli bir struct ve fonksiyon ile güvenli API örneği verilmiştir.

```rust
struct Saklayici<'a> {
    veri: &'a str,
}

impl<'a> Saklayici<'a> {
    fn al(&self) -> &'a str {
        self.veri
    }
}

fn main() {
    let yazi = String::from("Rust güvenli!");
    let s = Saklayici { veri: &yazi };
    println!("{}", s.al());
}
```
