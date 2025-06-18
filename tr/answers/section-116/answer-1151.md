## 📘 Bölüm: Pratikte Async Desenler
### 🔹 Kategori: Async tekrar deneme ve geri çekilme mantığı
#### ✅ Cevap 1151: Async tekrar deneme ve geri çekilme mantığı

Bu soruda, başarısız olabilen bir async işlemi belirli sayıda tekrar deneme ve her denemede artan gecikme (backoff) uygulama mantığı gösterilmiştir. Rust'ta `tokio::time::sleep` ile gecikme eklenebilir.

```rust
use tokio::time::{sleep, Duration};

async fn unreliable_operation() -> Result<u32, &'static str> {
    // Rastgele başarısız olan örnek bir işlem
    if rand::random::<u8>() % 2 == 0 {
        Ok(42)
    } else {
        Err("Failed!")
    }
}

async fn retry_with_backoff(max_retries: u32) -> Result<u32, &'static str> {
    let mut delay = 100;
    for _ in 0..max_retries {
        match unreliable_operation().await {
            Ok(val) => return Ok(val),
            Err(_) => sleep(Duration::from_millis(delay)).await,
        }
        delay *= 2;
    }
    Err("All attempts failed!")
}

#[tokio::main]
async fn main() {
    match retry_with_backoff(5).await {
        Ok(val) => println!("Success: {}", val),
        Err(e) => println!("Error: {}", e),
    }
}
```
