## 📘 Bölüm: Bulut ve Dağıtık Sistemlerde Rust
### 🔹 Kategori: Rust ile Mikroservisler
#### ✅ Cevap 940: Bulut-yerel Rust uygulama tasarımı

Bulut-yerel uygulamalar, bulut ortamlarında ölçeklenebilirlik, dayanıklılık ve kolay dağıtım için tasarlanır. Durumsuzluk, ortam değişkeniyle yapılandırma, sağlık kontrolleri ve zarif kapatma gibi desenleri benimserler.

Örnek: Rust ile ortam değişkeninden yapılandırma okuma ve zarif kapatma işlemi:

```rust
use std::env;
use tokio::signal;

#[tokio::main]
async fn main() {
    // Ortam değişkeninden yapılandırma oku
    let port = env::var("SERVICE_PORT").unwrap_or_else(|_| "8080".to_string());
    println!("Servis {} portunda başlatılıyor", port);

    // Kapatma sinyalini bekle
    signal::ctrl_c().await.expect("olay dinlenemedi");
    println!("Zarifçe kapatılıyor");
}
```

En iyi uygulamalar: servisleri durumsuz tutmak, yapılandırmayı dışarıdan almak, sağlık uç noktaları eklemek ve zarif kapatma sağlamak. Bu desenler, Rust mikroservislerini sağlam ve bulut uyumlu hale getirir.
