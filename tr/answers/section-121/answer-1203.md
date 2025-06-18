## 📘 Bölüm: İleri Async I/O ve Ağ Programlama  
### 🔹 Kategori: Async Dosya Sistemi İşlemleri  
#### ✅ Cevap 1203: Async dosya sistemi işlemleri ve akış

Async dosya işlemleri, I/O işlemlerinin bloklamadan yürütülmesini sağlar ve yüksek performanslı uygulamalarda önemlidir. Rust'ta `tokio::fs` ile dosyalar asenkron olarak okunabilir ve yazılabilir.

```rust
use tokio::fs::File;
use tokio::io::{self, AsyncReadExt};

#[tokio::main]
async fn main() -> io::Result<()> {
    let mut file = File::open("data.txt").await?;
    let mut contents = String::new();
    file.read_to_string(&mut contents).await?;
    println!("Dosya içeriği: {}", contents);
    Ok(())
}
```

Bu örnekte, `tokio::fs::File` ile bir dosya asenkron olarak okunur ve içeriği ekrana yazdırılır.
