## 📘 Bölüm: Clap ile CLI Uygulamaları  
### 🔹 Kategori: Yardım ve Sürüm Çıktısı  
#### ✅ Cevap 474: Yardım ve sürüm çıktısı sağlama

Bu örnekte, `clap` ile otomatik yardım ve sürüm çıktısı sağlanmıştır. `App::version` ve `App::about` ile bu bilgiler eklenir.

```rust
use clap::{App, Arg};

fn main() {
    let _matches = App::new("YardimCLI")
        .version("1.0")
        .about("Yardım ve sürüm örneği")
        .arg(Arg::with_name("isim").help("Kullanıcı adı"))
        .get_matches();
}
```
