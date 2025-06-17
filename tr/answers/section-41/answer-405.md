## 📘 Bölüm: Dosya G/Ç ve Dosya Sistemi  
### 🔹 Kategori: Dosya ve Yol Kontrolü  
#### ✅ Cevap 405: Bir dosya veya yolun varlığını kontrol etme

Bu soruda, bir dosyanın varlığını kontrol etmeyi ve dosyayı silmeyi öğrendiniz. `Path::exists` fonksiyonu ile dosya varlığı kontrol edilir.

```rust
use std::fs::{self, File};
use std::path::Path;

fn main() {
    let file_path = "check.txt";
    File::create(file_path).unwrap();
    if Path::new(file_path).exists() {
        println!("{} dosyası mevcut.", file_path);
    }
    fs::remove_file(file_path).unwrap();
    if !Path::new(file_path).exists() {
        println!("{} dosyası silindi.", file_path);
    }
}
```
