## 📘 Bölüm: Eşzamanlılık Tasarım Desenleri  
### 🔹 Kategori: Fan-in ve fan-out desenleri  
#### ✅ Cevap 1191: Fan-in ve fan-out eşzamanlılık desenleri

Fan-in ve fan-out desenleri, eşzamanlı programlamada işlerin dağıtılması ve toplanması için kullanılır. Fan-out, bir işi birden fazla iş parçacığına veya göreve dağıtırken; fan-in, birden fazla kaynaktan gelen sonuçları tek bir noktada toplar.

**Fan-out örneği:**
```rust
use std::thread;

fn main() {
    let handles: Vec<_> = (0..4).map(|i| {
        thread::spawn(move || {
            println!("Worker {} çalışıyor", i);
        })
    }).collect();
    for h in handles { h.join().unwrap(); }
}
```

**Fan-in örneği:**
```rust
use std::sync::mpsc;
use std::thread;

fn main() {
    let (tx, rx) = mpsc::channel();
    for i in 0..4 {
        let tx = tx.clone();
        thread::spawn(move || {
            tx.send(i * 2).unwrap();
        });
    }
    drop(tx); // Tüm göndericiler kapatıldı
    for received in rx {
        println!("Alındı: {}", received);
    }
}
```

Fan-out, paralel iş dağıtımı için; fan-in ise birden fazla işin sonucunu toplamak için kullanılır. Örneğin, web isteklerini paralel yapmak (fan-out) ve sonuçları toplamak (fan-in) gibi.
