## 📘 Bölüm: Bulut ve Dağıtık Sistemlerde Rust
### 🔹 Kategori: Rust ile Mikroservisler
#### ✅ Cevap 936: Gözlemlenebilirlik: metrikler, izleme ve loglama

Gözlemlenebilirlik, dağıtık sistemleri anlamak, izlemek ve hata ayıklamak için gereklidir. Metrikler (nicel ölçümler), izleme (istek akışları) ve loglama (olay kayıtları) ile sağlanır.

Rust'ta `metrics`, `tracing` ve `log` gibi crate'ler kullanılabilir:

```rust
// Metrikler
use metrics::{increment_counter, gauge};
fn metrik_kaydet() {
    increment_counter!("istekler_toplam");
    gauge!("kuyruk_derinligi", 5.0);
}

// İzleme
use tracing::{info_span, instrument};
#[instrument]
fn istek_isle() {
    let span = info_span!("istek_isle");
    let _enter = span.enter();
    // ...
}

// Loglama
use log::{info, error};
fn log_ornek() {
    info!("Servis başlatıldı");
    error!("Bir hata oluştu");
}

fn main() {
    // Logger ve exporter başlatılır (ör. env_logger, tracing_subscriber)
}
```

En iyi uygulamalar arasında metriklerin Prometheus'a aktarılması, dağıtık izleme (ör. OpenTelemetry) ve logların yapılandırılmış şekilde toplanması yer alır. Tutarlı enstrümantasyon, sorunları teşhis etmeye ve sistem sağlığını izlemeye yardımcı olur.
