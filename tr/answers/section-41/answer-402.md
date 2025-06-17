## 📘 Bölüm: Dosya G/Ç ve Dosya Sistemi  
### 🔹 Kategori: Dosyaya Yazma ve Ekleme  
#### ✅ Cevap 402: Yazma ve ekleme modunda dosyaya yazma

Bu soruda, bir dosyaya hem yazma hem de ekleme modunda veri eklemeyi öğrendiniz. `OpenOptions` ile dosya açılır, `write` ve `append` modları kullanılır.

```rust
use std::fs::{File, OpenOptions};
use std::io::{self, Write, Read};

fn main() -> io::Result<()> {
    let mut file = File::create("output.txt")?;
    writeln!(file, "İlk satır")?;
    drop(file);
    let mut file = OpenOptions::new().append(true).open("output.txt")?;
    writeln!(file, "Eklenen satır")?;
    drop(file);
    let mut contents = String::new();
    File::open("output.txt")?.read_to_string(&mut contents)?;
    println!("Dosya içeriği:\n{}", contents);
    Ok(())
}
```
