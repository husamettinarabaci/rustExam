## 📘 Bölüm: Dosya G/Ç ve Dosya Sistemi  
### 🔹 Kategori: Güvenli Dosya İşlemleri  
#### ✅ Cevap 406: Güvenli dosya işlemleri için Path ve PathBuf kullanımı

Bu soruda, dosya yollarını güvenli şekilde yönetmek için `Path` ve `PathBuf` kullandınız. Dosya oluşturma ve varlık kontrolü örneği gösterilmiştir.

```rust
use std::fs::File;
use std::io::{self, Write};
use std::path::{Path, PathBuf};

fn main() -> io::Result<()> {
    let mut path = PathBuf::from("safe.txt");
    let mut file = File::create(&path)?;
    writeln!(file, "Güvenli dosya işlemi")?;
    if Path::new(&path).exists() {
        println!("Dosya mevcut: {:?}", path);
    }
    Ok(())
}
```
