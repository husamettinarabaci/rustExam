## 📘 Bölüm: Aktör Modeli ve Mesaj Sistemleri  
### 🔹 Kategori: Aktör Eşzamanlılık Modeli  
#### ✅ Cevap 1031: Aktör eşzamanlılık modelini anlama

Aktör modeli, her "aktör"ün kendi durumunu ve mesaj kuyruğunu yönettiği, mesajlaşma yoluyla iletişim kurduğu bir eşzamanlılık modelidir. Rust'ta aktörler genellikle thread veya async task olarak çalışır ve kanallar üzerinden mesaj alır. Bu model, paylaşımlı durum yerine mesajlaşma ile veri paylaşımını teşvik eder.

```rust
use std::sync::mpsc;
use std::thread;

struct Actor;

impl Actor {
    fn handle(&self, msg: String) {
        println!("Actor received: {}", msg);
    }
}

fn main() {
    let (tx, rx) = mpsc::channel();
    let actor = Actor;
    thread::spawn(move || {
        for msg in rx {
            actor.handle(msg);
        }
    });
    tx.send("Hello, Actor!".to_string()).unwrap();
}
```
