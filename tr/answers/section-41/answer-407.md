## 📘 Bölüm: Dosya G/Ç ve Dosya Sistemi  
### 🔹 Kategori: Dizin Ağacında Gezinme  
#### ✅ Cevap 407: Dizin ağacında gezinmek için WalkDir (üçüncü parti)

Bu soruda, bir dizin ağacında gezinmek için `walkdir` crate'i kullandınız. Tüm dosya ve klasörler terminalde listelenir.

```rust
use std::fs::{self, File};
use std::io::Write;
use walkdir::WalkDir;

fn main() {
    let dir = "tree_dir";
    fs::create_dir_all(dir).unwrap();
    File::create(format!("{}/a.txt", dir)).unwrap();
    File::create(format!("{}/b.txt", dir)).unwrap();
    for entry in WalkDir::new(dir) {
        let entry = entry.unwrap();
        println!("{}", entry.path().display());
    }
}
```
