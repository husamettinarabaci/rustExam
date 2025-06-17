## 📘 Bölüm: Clap ile CLI Uygulamaları  
### 🔹 Kategori: Bayraklar ve Ortam Değişkenleri  
#### ✅ Cevap 477: Bayraklar ve ortam değişkenlerini ayrıştırma

Bu örnekte, bir bayrak ve bir ortam değişkeni ile program davranışı kontrol edilmiştir.

```rust
use clap::{App, Arg};
use std::env;

fn main() {
    let matches = App::new("BayrakCLI")
        .arg(Arg::with_name("debug").short("d").long("debug").help("Debug modunu açar"))
        .get_matches();

    let debug = matches.is_present("debug") || env::var("DEBUG").is_ok();
    if debug {
        println!("Debug modu aktif!");
    } else {
        println!("Normal modda çalışıyor.");
    }
}
```
