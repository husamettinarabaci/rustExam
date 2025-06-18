## 📘 Bölüm: Eşzamanlılık Desenleri ve İfadeleri  
### 🔹 Kategori: Pipeline işleme için kanallar  
#### ✅ Cevap 1063: Pipeline işleme için kanallar

Pipeline (boru hattı) deseni, verinin bir dizi aşamadan geçirilerek işlendiği bir yapıdır. Rust'ta bu desen, kanallar ve iş parçacıkları ile kolayca kurulabilir.

```rust
use std::sync::mpsc;
use std::thread;

fn main() {
    let (tx1, rx1) = mpsc::channel();
    let (tx2, rx2) = mpsc::channel();

    // İlk aşama
    thread::spawn(move || {
        for i in 1..=5 {
            tx1.send(i).unwrap();
        }
    });

    // İkinci aşama
    thread::spawn(move || {
        for val in rx1 {
            tx2.send(val * 2).unwrap();
        }
    });

    // Son aşama
    for result in rx2 {
        println!("Sonuç: {}", result);
    }
}
```
Bu örnekte, ilk aşama sayıları gönderir, ikinci aşama ikiyle çarpar, son aşama ise sonucu alır.
