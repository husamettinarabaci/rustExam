## 📘 Bölüm: Kanal Desenleri ve İleri Mesajlaşma  
### 🔹 Kategori: Kanal deadlock'larını teşhis ve düzeltme  
#### ✅ Cevap 1110: Kanal deadlock'larını teşhis ve düzeltme

Aşağıda, iki thread'in birbirinden mesaj beklediği ve deadlock oluşan bir örnek ile, ardından deadlock'u önleyen bir çözüm gösterilmiştir.

```rust
// Deadlock'lu örnek:
use std::sync::mpsc;
use std::thread;

fn main() {
    let (tx1, rx1) = mpsc::channel();
    let (tx2, rx2) = mpsc::channel();

    let handle1 = thread::spawn(move || {
        tx1.send("A").unwrap();
        let _ = rx2.recv(); // Burada deadlock oluşur
    });
    let handle2 = thread::spawn(move || {
        tx2.send("B").unwrap();
        let _ = rx1.recv(); // Burada deadlock oluşur
    });

    handle1.join().unwrap();
    handle2.join().unwrap();
}

// Deadlock'u önleyen çözüm:
// Önce tüm gönderimler yapılır, sonra alımlar başlatılır.
```

Deadlock, iki thread'in birbirinden mesaj beklemesiyle oluşur. Çözüm olarak, önce tüm gönderimler yapılmalı, sonra alımlar başlatılmalıdır.
