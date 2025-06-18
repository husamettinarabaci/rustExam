## 📘 Bölüm: Sistem Seviyesinde Tasarım  
### 🔹 Kategori: Sinyal ve Süreç Kontrolü  
#### ✅ Cevap 546: Sinyal ve süreç kontrolü

Rust'ta `signal-hook` crate'i ile sinyal yakalama kolayca yapılabilir. Aşağıda SIGINT (Ctrl+C) için örnek verilmiştir.

```rust
use signal_hook::consts::SIGINT;
use signal_hook::flag;
use std::sync::atomic::{AtomicBool, Ordering};
use std::sync::Arc;

fn main() {
    let term = Arc::new(AtomicBool::new(false));
    flag::register(SIGINT, Arc::clone(&term)).unwrap();
    println!("Press Ctrl+C to exit.");
    while !term.load(Ordering::Relaxed) {
        std::thread::sleep(std::time::Duration::from_millis(100));
    }
    println!("SIGINT received, exiting.");
}
```
