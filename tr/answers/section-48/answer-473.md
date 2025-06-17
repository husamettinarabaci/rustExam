## 📘 Bölüm: Clap ile CLI Uygulamaları  
### 🔹 Kategori: Alt Komutlar ve Argüman Grupları  
#### ✅ Cevap 473: Alt komutlar ve argüman grupları kullanma

Bu örnekte, `clap` ile iki alt komut ve her biri için farklı argümanlar tanımlanmıştır.

```rust
use clap::{App, Arg, SubCommand};

fn main() {
    let matches = App::new("KomutCLI")
        .subcommand(SubCommand::with_name("selamla")
            .arg(Arg::with_name("isim").required(true).help("Kime selam verilecek")))
        .subcommand(SubCommand::with_name("veda")
            .arg(Arg::with_name("isim").required(true).help("Kime veda edilecek")))
        .get_matches();

    if let Some(matches) = matches.subcommand_matches("selamla") {
        let isim = matches.value_of("isim").unwrap();
        println!("Merhaba, {}!", isim);
    } else if let Some(matches) = matches.subcommand_matches("veda") {
        let isim = matches.value_of("isim").unwrap();
        println!("Hoşça kal, {}!", isim);
    }
}
```
