## 📘 Bölüm: Kanallar ve Mesaj Geçişi
### 🔹 Kategori: Kanal İletişim Desenlerini Test Etme
#### ✅ Cevap 1020: Kanal iletişim desenlerini test etme

Aşağıda, bir mpsc kanalında birden fazla mesajın doğru sırayla alındığını test eden birim test örneği verilmiştir.

```rust
use tokio::sync::mpsc;

#[tokio::test]
async fn test_mpsc_channel_order() {
    let (tx, mut rx) = mpsc::channel(3);
    tx.send(1).await.unwrap();
    tx.send(2).await.unwrap();
    tx.send(3).await.unwrap();

    assert_eq!(rx.recv().await, Some(1));
    assert_eq!(rx.recv().await, Some(2));
    assert_eq!(rx.recv().await, Some(3));
}
```
