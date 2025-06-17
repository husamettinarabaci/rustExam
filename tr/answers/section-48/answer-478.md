## 📘 Bölüm: Clap ile CLI Uygulamaları  
### 🔹 Kategori: Yapılandırma Dosyası ve Kaynak Birleştirme  
#### ✅ Cevap 478: `clap` ile yapılandırma dosyası okuma ve kaynakları birleştirme

Bu örnekte, ayar değeri dosya, ortam değişkeni ve argümanlardan birleştirilerek belirlenmiştir.

```rust
use clap::{App, Arg};
use std::env;
use std::fs;

fn main() {
    let matches = App::new("AyarCLI")
        .arg(Arg::with_name("config").short("c").long("config").takes_value(true).help("Yapılandırma dosyası"))
        .arg(Arg::with_name("deger").short("d").long("deger").takes_value(true).help("Ayar değeri"))
        .get_matches();

    let mut value = None;
    if let Some(cfg) = matches.value_of("config") {
        if let Ok(contents) = fs::read_to_string(cfg) {
            value = Some(contents.trim().to_string());
        }
    }
    if value.is_none() {
        value = env::var("AYAR").ok();
    }
    if value.is_none() {
        value = matches.value_of("deger").map(|s| s.to_string());
    }
    println!("Ayar değeri: {}", value.unwrap_or("Varsayılan".to_string()));
}
```
