## 📘 Bölüm: Clap ile CLI Uygulamaları  
### 🔹 Kategori: Hata Mesajları  
#### ✅ Cevap 479: Kullanıcı dostu hata mesajları oluşturma

Bu örnekte, eksik veya hatalı argümanlar için kullanıcı dostu hata mesajları gösterilmiştir. `clap` otomatik olarak açıklayıcı hata mesajları üretir, ancak özel mesajlar da eklenebilir.

```rust
use clap::{App, Arg};

fn main() {
    let app = App::new("HataCLI")
        .arg(Arg::with_name("dosya").required(true).help("İşlenecek dosya"));

    let matches = app.get_matches_safe();
    match matches {
        Ok(m) => {
            let dosya = m.value_of("dosya").unwrap();
            println!("Dosya: {}", dosya);
        }
        Err(e) => {
            eprintln!("Hata: {}", e.message);
        }
    }
}
```
