## 📘 Section: Channel Patterns and Advanced Messaging  
### 🔹 Category: Message batching and aggregation  
#### ✅ Answer 1103: Message batching and aggregation

This example shows a consumer that collects messages from multiple producers and processes them in batches of 3.

```rust
use tokio::sync::mpsc;

#[tokio::main]
async fn main() {
    let (tx, mut rx) = mpsc::channel(10);
    for i in 0..6 {
        let tx = tx.clone();
        tokio::spawn(async move {
            tx.send(i).await.unwrap();
        });
    }
    drop(tx);
    let mut buffer = Vec::new();
    while let Some(msg) = rx.recv().await {
        buffer.push(msg);
        if buffer.len() == 3 {
            println!("Batch: {:?}", buffer);
            buffer.clear();
        }
    }
    if !buffer.is_empty() {
        println!("Batch: {:?}", buffer);
    }
}
```
