## 📘 Bölüm: Clap ile CLI Uygulamaları  
### 🔹 Kategori: Modüler CLI Yapısı  
#### ✅ Cevap 480: Büyük CLI araçlarını modüler olarak yapılandırma

Bu örnekte, büyük bir CLI uygulamasının modüllere ayrılarak `clap` ile entegre edilmesi gösterilmiştir.

```rust
mod selam {
    pub fn calistir(isim: &str) {
        println!("Merhaba, {}!", isim);
    }
}

mod veda {
    pub fn calistir(isim: &str) {
        println!("Hoşça kal, {}!", isim);
    }
}

use clap::{App, Arg, SubCommand};

fn main() {
    let matches = App::new("ModulerCLI")
        .subcommand(SubCommand::with_name("selam").arg(Arg::with_name("isim").required(true)))
        .subcommand(SubCommand::with_name("veda").arg(Arg::with_name("isim").required(true)))
        .get_matches();

    if let Some(m) = matches.subcommand_matches("selam") {
        let isim = m.value_of("isim").unwrap();
        selam::calistir(isim);
    } else if let Some(m) = matches.subcommand_matches("veda") {
        let isim = m.value_of("isim").unwrap();
        veda::calistir(isim);
    }
}
```
