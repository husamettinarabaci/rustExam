## 📘 Bölüm: Rust ile Mikroservis Mimarisi
### 🔹 Kategori: Gözlemlenebilirlik
#### ✅ Cevap 1236: OpenTelemetry ile dağıtık loglama ve izleme

Gözlemlenebilirlik, mikroservisleri izlemek ve hata ayıklamak için gereklidir. OpenTelemetry, dağıtık izleme ve loglama sağlar.

Rust'ta:
- `opentelemetry` ve `tracing` crate'leri kullanılır.
- Bir tracer ve exporter (örn. Jaeger, OTLP) kurulur.
- Kodunuzda span ve event ile enstrümantasyon yapılır.

Örnek:
```rust
use tracing::{info, span, Level};
use tracing_subscriber::layer::SubscriberExt;
use tracing_opentelemetry::OpenTelemetryLayer;

let tracer = opentelemetry_jaeger::new_pipeline().install_simple()?;
let telemetry = OpenTelemetryLayer::new(tracer);
tracing_subscriber::registry().with(telemetry).init();

let span = span!(Level::INFO, "my_span");
let _enter = span.enter();
info!("Merhaba, tracing!");
```
Bu kurulum, Rust mikroservislerinizde dağıtık izleme ve loglamayı etkinleştirir.
