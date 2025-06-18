## 📘 Bölüm: Eklenti Sistemleri İleri Konular  
### 🔹 Kategori: Eklenti Yaşam Döngüsü Yönetimi  
#### ✅ Cevap 1306: Eklenti yaşam döngüsü yönetimi

Eklenti yaşam döngüsü, eklentinin başlatılması, çalıştırılması ve sonlandırılması süreçlerini kapsar. Rust'ta trait ile `init` ve `shutdown` gibi metotlar tanımlanarak yönetilebilir.

```rust
trait Plugin {
    fn init(&mut self) { println!("Plugin initialized"); }
    fn run(&self);
    fn shutdown(&mut self) { println!("Plugin shutdown"); }
}

struct LoggerPlugin;

impl Plugin for LoggerPlugin {
    fn run(&self) {
        println!("Logger running");
    }
}

fn main() {
    let mut plugin = LoggerPlugin;
    plugin.init();
    plugin.run();
    plugin.shutdown();
}
```
