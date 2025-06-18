## 📘 Bölüm: İleri Async Desenleri  
### 🔹 Kategori: Async iş yüklerini profil etme ve darboğazları tespit etme  
#### ✅ Cevap 560: Async iş yüklerini profil etme ve darboğazları tespit etme

Async Rust kodunda performans darboğazlarını bulmak için `tokio-console`, `flamegraph` ve benzeri araçlar kullanılır. `tokio-console` ile canlı olarak görevlerin durumunu izleyebilir, `flamegraph` ile CPU kullanımını görselleştirebilirsiniz. Kodunuzu profil etmek için aşağıdaki gibi bir örnek kullanabilirsiniz:

```rust
use tokio::time::{sleep, Duration};

#[tokio::main]
async fn main() {
    let h1 = tokio::spawn(async {
        sleep(Duration::from_secs(2)).await;
    });
    let h2 = tokio::spawn(async {
        sleep(Duration::from_secs(1)).await;
    });
    h1.await.unwrap();
    h2.await.unwrap();
}
```

Bu kodu çalıştırırken `tokio-console` ile görevlerin durumunu izleyebilir veya `cargo flamegraph` ile CPU profilini çıkarabilirsiniz.
