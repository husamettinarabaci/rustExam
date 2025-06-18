## 📘 Bölüm: Async Ağ ve IO
### 🔹 Kategori: Async dosya IO ve performans
#### ✅ Cevap 1097: Async dosya IO ve performans

Bu örnekte Tokio ile büyük bir dosya asenkron olarak okunup başka bir dosyaya yazılır ve işlem süresi ölçülür.

```rust
use tokio::{fs::File, io::{AsyncReadExt, AsyncWriteExt}};
use std::time::Instant;

#[tokio::main]
async fn main() {
    let start = Instant::now();
    let mut src = File::open("kaynak.txt").await.unwrap();
    let mut dst = File::create("hedef.txt").await.unwrap();
    let mut buf = [0; 8192];
    loop {
        let n = src.read(&mut buf).await.unwrap();
        if n == 0 { break; }
        dst.write_all(&buf[..n]).await.unwrap();
    }
    let elapsed = start.elapsed();
    println!("İşlem süresi: {:?}", elapsed);
}
```
