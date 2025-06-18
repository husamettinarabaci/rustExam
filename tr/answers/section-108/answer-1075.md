## 📘 Bölüm: Tokio Ekosistemi Derinlemesine  
### 🔹 Kategori: Tokio senkronizasyon primitifleri kullanımı  
#### ✅ Cevap 1075: Tokio senkronizasyon primitifleri kullanımı

Tokio, async ortamda veri paylaşımı ve senkronizasyon için `Mutex`, `RwLock`, `Notify` gibi primitifler sunar.

- `Mutex`: Tek seferde bir görev tarafından veri erişimi sağlar.
- `RwLock`: Birden fazla okuma veya tek yazma erişimi sağlar.
- `Notify`: Görevler arası bildirim için kullanılır.

Örnek:
```rust
use tokio::sync::{Mutex, Notify};
use std::sync::Arc;

#[tokio::main]
async fn main() {
    let data = Arc::new(Mutex::new(0));
    let notify = Arc::new(Notify::new());
    // ... kullanım örnekleri ...
}
```
Her primitif, farklı senkronizasyon ihtiyaçları için uygundur.
