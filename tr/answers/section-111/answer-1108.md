## 📘 Bölüm: Kanal Desenleri ve İleri Mesajlaşma  
### 🔹 Kategori: Mesaj geçişli eşzamanlılık testleri  
#### ✅ Cevap 1108: Mesaj geçişli eşzamanlılığı test etme

Çözümde, bir üretici ve bir tüketici ile kanal üzerinden mesaj iletimi yapılır ve birim test fonksiyonu ile sıralı alım doğrulanır.

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
