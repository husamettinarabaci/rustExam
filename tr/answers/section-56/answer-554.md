## 📘 Bölüm: İleri Async Desenleri  
### 🔹 Kategori: Async tekrar deneme ve geri çekilme mekanizmaları  
#### ✅ Cevap 554: Async tekrar deneme ve geri çekilme mekanizmaları

Bu soruda, async işlemlerde başarısızlık durumunda tekrar deneme ve exponential backoff uygulamayı öğrendiniz. Her başarısız denemede bekleme süresi iki katına çıkarılır.

```rust
use tokio::time::{sleep, Duration};

async fn unreliable_operation() -> Result<(), ()> {
    // Simulate a 50% chance of failure
    if rand::random::<bool>() {
        Ok(())
    } else {
        Err(())
    }
}

#[tokio::main]
async fn main() {
    let mut delay = 100;
    let mut attempts = 0;
    let max_attempts = 5;
    loop {
        attempts += 1;
        match unreliable_operation().await {
            Ok(_) => {
                println!("Success on attempt {}", attempts);
                break;
            }
            Err(_) if attempts < max_attempts => {
                println!("Failed attempt {}, retrying in {}ms", attempts, delay);
                sleep(Duration::from_millis(delay)).await;
                delay *= 2;
            }
            Err(_) => {
                println!("Operation failed after {} attempts", attempts);
                break;
            }
        }
    }
}
```
