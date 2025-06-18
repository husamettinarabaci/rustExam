## 📘 Bölüm: İleri Hata Yönetimi ve Kurtarma
### 🔹 Kategori: Üretimde hata kaydı ve raporlama
#### ✅ Cevap 677: Üretimde hata kaydı ve raporlama

Hataların loglanması, üretimde sorunların tanılanması için gereklidir. `log` ve `env_logger` gibi crate'lerle farklı seviyelerde loglama ve hata raporlama yapılabilir.

```rust
use log::{error, warn, info};

fn main() {
    env_logger::init();
    info!("Uygulama başlatıldı");
    warn!("Bu bir uyarı");
    error!("Bir hata oluştu");
    // Harici sisteme raporlama simülasyonu
    println!("Hata izleme servisine raporlanıyor...");
}
```
