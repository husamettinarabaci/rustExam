## 📘 Bölüm: Eşzamanlılık Tasarım Desenleri  
### 🔹 Kategori: Pipeline ve aşamalı işleme  
#### ✅ Cevap 1192: Pipeline ve aşamalı işleme

Pipeline (boru hattı) ve aşamalı işleme, verinin bir dizi aşamadan geçerek işlendiği eşzamanlılık desenleridir. Her aşama bir iş parçacığı veya görevde çalışabilir ve veriyi bir sonraki aşamaya aktarır.

**Örnek:**
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

Avantajları: Her aşama bağımsız çalışır, iş yükü dağıtılır ve işlem hattı paralel çalışabilir. Özellikle veri işleme, akış ve dönüştürme işlemlerinde kullanılır.
