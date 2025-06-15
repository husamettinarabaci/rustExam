## 📘 Bölüm: Hata Yönetimi
### 🔹 Kategori: main fonksiyonunda hata yönetimi
#### ✅ Cevap 196: main fonksiyonunda hata yönetimi

Rust'ta `main` fonksiyonu `Result` döndürebilir, böylece `?` operatörü ile hata iletimi yapılabilir. Bu, komut satırı uygulamalarında hata yönetimini kolaylaştırır. Eğer `main` fonksiyonundan hata dönerse, Rust bu hatayı standart hata çıktısına yazdırır.

```rust
use std::fs::File;
use std::io::{self, Read};

fn dosya_oku() -> io::Result<String> {
    let mut dosya = File::open("test.txt")?;
    let mut icerik = String::new();
    dosya.read_to_string(&mut icerik)?;
    Ok(icerik)
}

fn main() -> io::Result<()> {
    match dosya_oku() {
        Ok(veri) => {
            println!("Dosya içeriği: {}", veri);
            Ok(())
        },
        Err(e) => {
            eprintln!("Hata: {}", e);
            Err(e)
        }
    }
}
```
