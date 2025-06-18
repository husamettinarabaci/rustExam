## 📘 Bölüm: Bulut ve Dağıtık Sistemlerde Rust
### 🔹 Kategori: Rust ile Mikroservisler
#### ✅ Cevap 934: Servis keşfi ve yük dengeleme

Servis keşfi, mikroservislerin birbirini dinamik olarak bulmasını sağlar ve dağıtık sistemlerde ölçeklenebilirlik için gereklidir. Yük dengeleme ise gelen istekleri mevcut servis örneklerine dağıtarak kaynak kullanımını ve güvenilirliği artırır.

Bir Rust uygulaması, HTTP API'leri ile (ör. Consul veya etcd) kendini kaydedebilir. Aşağıda basit bir sözde kod örneği verilmiştir:

```rust
// Consul ile servisi kaydetme
fn register_service() {
    // reqwest gibi bir crate ile Consul'a HTTP POST gönderilir
    // POST /v1/agent/service/register
    // Body: { "Name": "my-service", "Address": "127.0.0.1", "Port": 8080 }
}

// Servisleri keşfetme
fn discover_services() {
    // GET /v1/catalog/service/my-service
    // Yanıtı ayrıştırarak mevcut örnekleri alın
}

// Basit round-robin yük dengeleyici
struct LoadBalancer {
    services: Vec<String>,
    index: usize,
}

impl LoadBalancer {
    fn next(&mut self) -> Option<&String> {
        if self.services.is_empty() { return None; }
        let service = &self.services[self.index % self.services.len()];
        self.index += 1;
        Some(service)
    }
}
```

Rust tabanlı sistemlerde genellikle `reqwest` gibi HTTP kütüphaneleri ve servis kayıtları kullanılır. Yük dengeleme uygulama içinde (ör. round-robin) veya altyapı katmanında (ör. Envoy, NGINX) yapılabilir.
