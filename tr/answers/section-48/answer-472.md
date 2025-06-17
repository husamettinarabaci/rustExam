## 📘 Bölüm: Clap ile CLI Uygulamaları  
### 🔹 Kategori: Argüman Tanımlama  
#### ✅ Cevap 472: Konumsal ve opsiyonel argümanlar tanımlama

Bu örnekte, `clap` ile bir konumsal ve bir opsiyonel argüman tanımlanmıştır. Konumsal argüman kullanıcı adını, opsiyonel argüman ise selam mesajını belirler.

```rust
use clap::{App, Arg};

fn main() {
    let matches = App::new("SelamCLI")
        .arg(Arg::with_name("kullanici").required(true).help("Kullanıcı adı"))
        .arg(Arg::with_name("mesaj").short("m").long("mesaj").takes_value(true).help("Selam mesajı"))
        .get_matches();

    let kullanici = matches.value_of("kullanici").unwrap();
    let mesaj = matches.value_of("mesaj").unwrap_or("Merhaba");
    println!("{} {}!", mesaj, kullanici);
}
```
