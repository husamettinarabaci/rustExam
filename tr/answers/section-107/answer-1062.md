## 📘 Bölüm: Eşzamanlılık Desenleri ve İfadeleri  
### 🔹 Kategori: Fan-in ve fan-out desenleri implementasyonu  
#### ✅ Cevap 1062: Fan-in ve fan-out desenleri implementasyonu

Fan-in, birden fazla kaynaktan gelen verilerin tek bir tüketiciye yönlendirilmesi; fan-out ise bir kaynaktan gelen verinin birden fazla tüketiciye dağıtılmasıdır. Rust'ta bu desenler genellikle kanallar ile uygulanır.

```rust
use std::thread;
use std::sync::mpsc;

fn main() {
    let (tx, rx) = mpsc::channel();
    // Fan-out: Birden fazla iş parçacığına veri gönderme
    for i in 0..3 {
        let tx = tx.clone();
        thread::spawn(move || {
            tx.send(format!("İş parçacığı {}", i)).unwrap();
        });
    }
    // Fan-in: Tüm iş parçacıklarından gelen verileri toplama
    for _ in 0..3 {
        println!("Gelen: {}", rx.recv().unwrap());
    }
}
```
Bu örnekte, üç iş parçacığı aynı kanala veri gönderiyor (fan-in), ana thread ise hepsini topluyor.
