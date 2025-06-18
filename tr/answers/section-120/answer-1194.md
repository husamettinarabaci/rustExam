## 📘 Bölüm: Eşzamanlılık Tasarım Desenleri  
### 🔹 Kategori: Olay odaklı eşzamanlılık modelleri  
#### ✅ Cevap 1194: Olay odaklı eşzamanlılık modelleri

Olay odaklı eşzamanlılık modeli, işlemlerin olaylara tepki olarak yürütüldüğü bir yaklaşımdır. Rust'ta bu model genellikle event loop (olay döngüsü) ile uygulanır. Her olay bir kuyruğa eklenir ve döngüde işlenir.

**Basit event loop örneği:**
```rust
use std::collections::VecDeque;

fn main() {
    let mut events = VecDeque::from(vec!["start", "data", "end"]);
    while let Some(event) = events.pop_front() {
        match event {
            "start" => println!("Başlatılıyor..."),
            "data" => println!("Veri işleniyor..."),
            "end" => println!("Bitti."),
            _ => (),
        }
    }
}
```

Avantajları: Kaynak kullanımı verimlidir, çok sayıda eşzamanlı olayı yönetmek kolaydır. Özellikle ağ sunucuları, GUI uygulamaları ve asenkron IO işlemlerinde tercih edilir.
