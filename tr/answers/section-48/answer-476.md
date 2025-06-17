## 📘 Bölüm: Clap ile CLI Uygulamaları  
### 🔹 Kategori: Derive Makroları ile Clap Kullanımı  
#### ✅ Cevap 476: `structopt` benzeri derive makroları ile `clap` kullanımı

Bu örnekte, `clap`'in derive makroları ile bir yapı tanımlanmış ve argümanlar bu yapı üzerinden ayrıştırılmıştır.

```rust
use clap::Parser;

#[derive(Parser)]
#[command(name = "DeriveCLI", about = "Derive ile argüman ayrıştırma örneği")]
struct Args {
    /// Kullanıcı adı
    isim: String,
    /// Selam mesajı
    #[arg(short, long, default_value = "Merhaba")]
    mesaj: String,
}

fn main() {
    let args = Args::parse();
    println!("{} {}!", args.mesaj, args.isim);
}
```
