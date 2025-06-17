## 📘 Bölüm: Derinlemesine Async Rust  
### 🔹 Kategori: Async İş Yükü Benchmark ve Profil  
#### ✅ Cevap 510: Async iş yüklerini benchmark ve profil etme

Async kodun performansını ölçmek için işlem öncesi ve sonrası zamanı kaydedebilirsiniz. Daha gelişmiş profil için `tokio-console` veya `flamegraph` gibi araçlar kullanılabilir.

```rust
use tokio::time::{sleep, Instant, Duration};

#[tokio::main]
async fn main() {
    let start = Instant::now();
    sleep(Duration::from_secs(1)).await;
    let elapsed = start.elapsed();
    println!("İşlem süresi: {:?}", elapsed);
}
```
