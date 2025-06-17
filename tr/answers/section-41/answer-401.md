## 📘 Bölüm: Dosya G/Ç ve Dosya Sistemi  
### 🔹 Kategori: Dosya Açma ve Okuma  
#### ✅ Cevap 401: std::fs ile dosya açma ve okuma

Bu soruda, bir dosya oluşturup içine yazı yazmayı ve ardından dosyayı açıp içeriğini okumayı öğrendiniz. `std::fs::File` ile dosya açılır, `std::io::Read` ile içerik okunur.

```rust
use std::fs::File;
use std::io::{self, Read, Write};

fn main() -> io::Result<()> {
    let mut file = File::create("example.txt")?;
    writeln!(file, "Merhaba, Rust!")?;
    drop(file);
    let mut file = File::open("example.txt")?;
    let mut contents = String::new();
    file.read_to_string(&mut contents)?;
    println!("Dosya içeriği: {}", contents);
    Ok(())
}
```
