## 📘 Bölüm: Eklenti Sistemleri İleri Konular  
### 🔹 Kategori: Eklentileri Özel Meta Verilerle Genişletme  
#### ✅ Cevap 1307: Eklentileri özel meta verilerle genişletme

Meta veriler, eklentilerin tanımlanmasını ve yönetilmesini kolaylaştırır. Rust'ta eklenti yapısına alan ekleyerek meta veri tutulabilir.

```rust
trait Plugin {
    fn name(&self) -> &str;
    fn metadata(&self) -> &PluginMetadata;
}

struct PluginMetadata {
    author: String,
    version: String,
}

struct MyPlugin {
    meta: PluginMetadata,
}

impl Plugin for MyPlugin {
    fn name(&self) -> &str { "MyPlugin" }
    fn metadata(&self) -> &PluginMetadata { &self.meta }
}

fn main() {
    let plugin = MyPlugin {
        meta: PluginMetadata { author: "Alice".into(), version: "1.0".into() },
    };
    println!("{} by {} (v{})", plugin.name(), plugin.metadata().author, plugin.metadata().version);
}
```
