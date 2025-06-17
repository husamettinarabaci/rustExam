## 📘 Bölüm: Dosya G/Ç ve Dosya Sistemi  
### 🔹 Kategori: Satır Satır Okuma  
#### ✅ Cevap 403: BufReader ile dosyayı satır satır okuma

Bu soruda, bir dosyayı satır satır okumak için `BufReader` ve `lines` metodunu kullandınız. Her satır ayrı ayrı okunup terminalde gösterilir.

```rust
use std::fs::File;
use std::io::{self, BufReader, BufRead, Write};

fn main() -> io::Result<()> {
    let mut file = File::create("lines.txt")?;
    writeln!(file, "Birinci satır")?;
    writeln!(file, "İkinci satır")?;
    drop(file);
    let file = File::open("lines.txt")?;
    let reader = BufReader::new(file);
    for line in reader.lines() {
        println!("Satır: {}", line?);
    }
    Ok(())
}
```
