## 📘 Bölüm: Option ve Result Türleri  
### 🔹 Kategori: Birden Fazla Hata Türü  
#### ✅ Cevap 185: Birden fazla hata türüyle başa çıkma

Bu örnek, Rust'ta birden fazla hata türünü yönetmek için `Result<i32, Box<dyn std::error::Error>>` döndürmeyi gösterir. Fonksiyon hem I/O hem de parse hatası döndürebilir, çağıran kod hata türüne göre farklı mesajlar verebilir.

```rust
use std::fs::File;
use std::io::{self, BufRead, BufReader};
use std::num::ParseIntError;

fn dosyadan_sayi_oku(path: &str) -> Result<i32, Box<dyn std::error::Error>> {
    let file = File::open(path)?;
    let mut reader = BufReader::new(file);
    let mut line = String::new();
    reader.read_line(&mut line)?;
    let num = line.trim().parse::<i32>()?;
    Ok(num)
}

fn main() {
    match dosyadan_sayi_oku("sayi.txt") {
        Ok(n) => println!("Sayı: {}", n),
        Err(e) => {
            if e.is::<io::Error>() {
                println!("I/O hatası: {}", e);
            } else if e.is::<ParseIntError>() {
                println!("Parse hatası: {}", e);
            } else {
                println!("Diğer hata: {}", e);
            }
        }
    }
}
```

- Fonksiyon, farklı hata türlerini `Box<dyn std::error::Error>` ile döndürebilir.
- Çağıran kod hata türünü `is::<T>()` ile kontrol edip uygun şekilde yönetebilir.
