## 📘 Bölüm: Clap ile CLI Uygulamaları  
### 🔹 Kategori: Temel CLI Kurulumu  
#### ✅ Cevap 471: `clap` ile temel bir CLI oluşturma

Bu soruda, `clap` kütüphanesi ile temel bir komut satırı arayüzü oluşturulmuştur. `clap` ile argümanlar kolayca tanımlanabilir ve işlenebilir. Aşağıdaki örnekte, bir selamlama komutu tanımlanmıştır.

```rust
use clap::{App, Arg, SubCommand};

fn main() {
    let matches = App::new("SelamCLI")
        .subcommand(SubCommand::with_name("selam").about("Selam verir"))
        .get_matches();

    if let Some(_) = matches.subcommand_matches("selam") {
        println!("Merhaba, Rust CLI!");
    }
}
```
