## 📘 Bölüm: İleri Oyun Geliştirme  
### 🔹 Kategori: Gerçek zamanlı oyunlar için performans ayarı  
#### ✅ Cevap 777: Gerçek zamanlı oyunlar için performans ayarı

Bu örnekte, oyun döngüsünde FPS ölçülür ve basit bir optimizasyon önerisi sunulur.

```rust
use std::time::{Instant, Duration};

fn main() {
    let mut frames = 0;
    let start = Instant::now();
    let duration = Duration::from_secs(1);
    while Instant::now() - start < duration {
        // Oyun mantığı burada
        frames += 1;
    }
    println!("FPS: {}", frames);
    println!("Daha yüksek FPS için gereksiz hesaplamaları azaltın.");
}
```
