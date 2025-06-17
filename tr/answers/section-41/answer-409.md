## 📘 Bölüm: Dosya G/Ç ve Dosya Sistemi  
### 🔹 Kategori: Dosya Kopyalama, Yeniden Adlandırma ve Silme  
#### ✅ Cevap 409: Dosyaları kopyalama, yeniden adlandırma veya silme

Bu soruda, bir dosyayı kopyalamayı, yeniden adlandırmayı ve silmeyi öğrendiniz. `std::fs::copy`, `std::fs::rename` ve `std::fs::remove_file` fonksiyonları kullanılır.

```rust
use std::fs::{self, File};
use std::io::Write;

fn main() {
    let src = "copyme.txt";
    let mut file = File::create(src).unwrap();
    writeln!(file, "Kopyalanacak dosya").unwrap();
    fs::copy(src, "copied.txt").unwrap();
    fs::rename("copied.txt", "renamed.txt").unwrap();
    fs::remove_file("renamed.txt").unwrap();
}
```
