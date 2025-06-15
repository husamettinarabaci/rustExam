## 📘 Bölüm: Option ve Result Türleri  
### 🔹 Kategori: Result Türü ve Hata İletimi  
#### ✅ Cevap 184: `?` ile hata iletimi

Bu örnek, Rust'ta `?` operatörüyle hataların nasıl iletileceğini gösterir. Fonksiyon, bir dosyadan sayı okur ve `Result<i32, Box<dyn std::error::Error>>` döndürür. Oluşan herhangi bir hata otomatik olarak çağırana iletilir.

```rust
use std::fs::File;
use std::io::{self, BufRead, BufReader};

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
        Err(e) => println!("Hata: {}", e),
    }
}
```

- `?` operatörü hata oluşursa fonksiyondan erken döner.
- Fonksiyon, `std::error::Error` implement eden tüm hata türlerini iletebilir.
