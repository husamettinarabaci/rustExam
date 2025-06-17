## 📘 Bölüm: Clap ile CLI Uygulamaları  
### 🔹 Kategori: Argüman Doğrulama  
#### ✅ Cevap 475: Argüman değerlerini doğrulama

Bu örnekte, bir argümanın belirli bir aralıkta olup olmadığı `clap` ile doğrulanmıştır. Geçersiz değerlerde hata mesajı gösterilir.

```rust
use clap::{App, Arg};

fn main() {
    let matches = App::new("DoğrulaCLI")
        .arg(Arg::with_name("yas")
            .required(true)
            .validator(|v| {
                v.parse::<u32>()
                    .map_err(|_| String::from("Geçerli bir sayı girin"))
                    .and_then(|n| if n >= 18 && n <= 99 {
                        Ok(())
                    } else {
                        Err(String::from("Yaş 18 ile 99 arasında olmalı"))
                    })
            })
            .help("Yaşınızı girin (18-99)"))
        .get_matches();

    let yas = matches.value_of("yas").unwrap();
    println!("Yaşınız: {}", yas);
}
```
