## 📘 Section: Channel Patterns and Advanced Messaging  
### 🔹 Category: Testing message-passing concurrency  
#### ✅ Answer 1108: Testing message-passing concurrency

This solution uses a producer and consumer communicating over a channel, and a unit test function to verify ordered message delivery.

```rust
use std::sync::mpsc;
use std::thread;

fn producer(tx: mpsc::Sender<u32>, count: u32) {
    for i in 0..count {
        tx.send(i).unwrap();
    }
}

#[test]
fn test_channel_message_passing() {
    let (tx, rx) = mpsc::channel();
    let count = 5;
    thread::spawn(move || producer(tx, count));
    for expected in 0..count {
        let received = rx.recv().unwrap();
        assert_eq!(received, expected);
    }
}
```
