## 📘 Bölüm: Proje Tasarımı ve Refaktörizasyon  
### 🔹 Kategori: Hata Yönetimi En İyi Uygulamaları  
#### ✅ Cevap 494: Tüm kodda hata yönetimi en iyi uygulamaları

Rust'ta hata yönetimi için `Result` ve `?` operatörü kullanılır. Her modül kendi hata tipini tanımlayabilir ve üst seviyeye iletebilir. Kullanıcıya anlamlı mesajlar vermek için hata türleri özelleştirilebilir.

```rust
use std::fs::File;
use std::io::{self, Read};

fn read_file(path: &str) -> Result<String, io::Error> {
    let mut file = File::open(path)?;
    let mut contents = String::new();
    file.read_to_string(&mut contents)?;
    Ok(contents)
}

fn main() {
    match read_file("data.txt") {
        Ok(data) => println!("File content: {}", data),
        Err(e) => eprintln!("Error reading file: {}", e),
    }
}
```
