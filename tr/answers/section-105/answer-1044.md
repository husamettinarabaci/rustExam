## 📘 Bölüm: Future'lar ve Async Primitifler
### 🔹 Kategori: Async koşul değişkenleri ve bildirimler
#### ✅ Cevap 1044: Async koşul değişkenleri ve bildirimler

`tokio::sync::Notify` gibi async bildirim mekanizmaları, birden fazla async görevin bir olay için beklemesini ve bir bildirimle devam etmesini sağlar. Aşağıdaki örnekte, iki görev bir olay için bekler ve bir başka görev bildirim gönderdiğinde devam ederler.

```rust
use tokio::sync::Notify;
use std::sync::Arc;

#[tokio::main]
async fn main() {
    let notify = Arc::new(Notify::new());
    let n1 = notify.clone();
    let n2 = notify.clone();

    let waiter1 = tokio::spawn(async move {
        println!("Görev 1 bekliyor...");
        n1.notified().await;
        println!("Görev 1 devam ediyor!");
    });
    let waiter2 = tokio::spawn(async move {
        println!("Görev 2 bekliyor...");
        n2.notified().await;
        println!("Görev 2 devam ediyor!");
    });

    tokio::time::sleep(tokio::time::Duration::from_millis(500)).await;
    notify.notify_waiters();
    let _ = tokio::join!(waiter1, waiter2);
}
```
