## 📘 Bölüm: Rust ile Mikroservis Mimarisi
### 🔹 Kategori: Asenkron İletişim
#### ✅ Cevap 1234: Servisler arası asenkron iletişim

Asenkron iletişim, servislerin gevşek bağlı olmasını ve ölçeklenebilirliği artırır. Yaygın desenler arasında mesaj kuyruğu (RabbitMQ), event bus ve pub/sub sistemleri (Kafka) bulunur.

Rust'ta:
- RabbitMQ için `lapin`, Kafka için `rdkafka` kullanılabilir.
- async/await ile mesajlar asenkron olarak gönderilip alınabilir.

Örnek (lapin):
```rust
use lapin::{options::*, types::FieldTable, Connection, ConnectionProperties};

let conn = Connection::connect("amqp://localhost:5672/", ConnectionProperties::default()).await?;
let channel = conn.create_channel().await?;
channel.basic_publish("", "queue", BasicPublishOptions::default(), b"msg", BasicProperties::default()).await?;
```
Bu yöntem, Rust mikroservisleri arasında güvenilir ve gevşek bağlı iletişim sağlar.
