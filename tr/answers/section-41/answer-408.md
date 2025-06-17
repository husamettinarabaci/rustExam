## 📘 Bölüm: Dosya G/Ç ve Dosya Sistemi  
### 🔹 Kategori: Dosya İzinleri ve Meta Veriler  
#### ✅ Cevap 408: Dosya izinleri ve meta verileriyle çalışma

Bu soruda, bir dosyanın izinlerini ve meta verilerini okumayı öğrendiniz. `std::fs::metadata` fonksiyonu ile bilgiler alınır.

```rust
use std::fs::{self, File};
use std::io::Write;

fn main() {
    let file_path = "meta.txt";
    let mut file = File::create(file_path).unwrap();
    writeln!(file, "Meta veri örneği").unwrap();
    let metadata = fs::metadata(file_path).unwrap();
    println!("Boyut: {} bayt", metadata.len());
    println!("Salt okunur: {}", metadata.permissions().readonly());
}
```
