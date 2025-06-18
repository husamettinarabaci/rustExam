## 📘 Bölüm: Eklenti Güvenliği ve İzolasyonu  
### 🔹 Kategori: Eklenti davranışını ve kaynak kullanımını izleme  
#### ✅ Cevap 1356: Eklenti davranışını ve kaynak kullanımını izleme

Eklenti davranışını ve kaynak kullanımını izlemek için, her eklentiye bir kimlik atayabilir ve işlemlerini bir sarmalayıcı (wrapper) ile takip edebilirsiniz. Rust'ta, eklenti çağrılarını zamanlayarak ve bellek kullanımını izleyerek ana uygulamaya raporlayabilirsiniz. Gerçek bellek ve CPU ölçümü için harici crate'ler (örn. `sysinfo`) kullanılabilir.

```rust
use std::time::{Duration, Instant};

trait Plugin {
    fn run(&self);
}

struct MonitoredPlugin<P: Plugin> {
    plugin: P,
    id: String,
}

impl<P: Plugin> MonitoredPlugin<P> {
    fn run_with_monitoring(&self) {
        let start = Instant::now();
        // Burada bellek ölçümü de eklenebilir
        self.plugin.run();
        let duration = start.elapsed();
        println!("[{}] Çalışma süresi: {:?}", self.id, duration);
        // Kaynak kullanımı ana uygulamaya raporlanabilir
    }
}
```
Bu yapı ile her eklenti çalıştırıldığında işlem süresi ve diğer metrikler izlenebilir. Gelişmiş izleme için işletim sistemi seviyesinde sınırlandırmalar ve detaylı kaynak ölçümleri eklenebilir.
