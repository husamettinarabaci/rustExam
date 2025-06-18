## 📘 Bölüm: Kanal Desenleri ve İleri Mesajlaşma  
### 🔹 Kategori: Select döngülerinde birden fazla kanal kullanımı  
#### ✅ Cevap 1109: Select döngülerinde birden fazla kanal kullanımı

Çözümde, iki kanalın da kapanmasını kontrol etmek için her iki kanaldan da `recv` ile mesaj alınır. `select!` makrosu ile hangi kanaldan mesaj gelirse o işlenir. Tüm kanallar kapandığında döngüden çıkılır.

```rust
use std::sync::mpsc;
use std::thread;
use std::time::Duration;

fn main() {
    let (tx1, rx1) = mpsc::channel();
    let (tx2, rx2) = mpsc::channel();

    thread::spawn(move || {
        tx1.send("Birinci kanal").unwrap();
        thread::sleep(Duration::from_millis(50));
    });
    thread::spawn(move || {
        tx2.send("İkinci kanal").unwrap();
    });

    let mut closed1 = false;
    let mut closed2 = false;
    while !(closed1 && closed2) {
        select! {
            recv(rx1) -> msg => match msg {
                Ok(val) => println!("rx1: {}", val),
                Err(_) => closed1 = true,
            },
            recv(rx2) -> msg => match msg {
                Ok(val) => println!("rx2: {}", val),
                Err(_) => closed2 = true,
            },
        }
    }
    println!("Tüm kanallar kapandı.");
}
```
> Not: `select!` makrosu için `crossbeam` crate'i gereklidir.
