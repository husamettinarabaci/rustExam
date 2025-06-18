## 📘 Bölüm: Eşzamanlılık Desenleri ve İfadeleri  
### 🔹 Kategori: Dayanıklı eşzamanlı sistemler tasarımı  
#### ✅ Cevap 1070: Dayanıklı eşzamanlı sistemler tasarımı

Dayanıklı (resilient) eşzamanlı sistemler, hata toleransı, otomatik toparlanma ve yeniden başlatma gibi özelliklere sahip olmalıdır. Rust'ta panic yakalama (`std::panic::catch_unwind`), thread yeniden başlatma ve hata loglama gibi teknikler kullanılır.

Örnek:
```rust
use std::thread;
use std::time::Duration;

fn main() {
    let handle = thread::spawn(|| {
        panic!("Bir hata oluştu!");
    });
    if let Err(_) = handle.join() {
        println!("Thread çöktü, yeniden başlatılıyor...");
        // Burada yeni bir thread başlatılabilir
    }
    // Otomatik toparlanma ve loglama eklenebilir
}
```
Bu tür sistemlerde, hatalar izlenmeli ve sistem otomatik olarak toparlanabilmelidir.
