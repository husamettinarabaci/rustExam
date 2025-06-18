## 📘 Section: Channels and Message Passing
### 🔹 Category: Testing Channel Communication Patterns
#### ✅ Answer 1020: Testing channel communication patterns

Below is a unit test that verifies multiple messages sent over an mpsc channel are received in the correct order.

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
