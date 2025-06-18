## 📘 Bölüm: Eklenti Sistemleri İleri Konular  
### 🔹 Kategori: Dinamik Trait Nesneleri ve API Tasarımı  
#### ✅ Cevap 1301: Eklenti API'lerinde dinamik trait nesneleri

Rust'ta eklenti sistemlerinde dinamik trait nesneleri (`dyn Trait`) kullanmak, farklı eklentilerin ortak bir arayüz üzerinden çalışmasını sağlar. Bu sayede ana uygulama, eklentileri çalışma zamanında yükleyip, trait nesnesi olarak işleyebilir. Trait nesneleri, derleme zamanında bilinmeyen türler için dinamik dağıtım (dynamic dispatch) sunar.

```rust
trait Plugin {
    fn name(&self) -> &str;
    fn run(&self);
}

struct LoggerPlugin;
impl Plugin for LoggerPlugin {
    fn name(&self) -> &str { "Logger" }
    fn run(&self) { println!("Logging..."); }
}

fn execute_plugin(plugin: &dyn Plugin) {
    println!("Running plugin: {}", plugin.name());
    plugin.run();
}

fn main() {
    let logger = LoggerPlugin;
    execute_plugin(&logger);
}
```
