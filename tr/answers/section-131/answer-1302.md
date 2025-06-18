## 📘 Bölüm: Eklenti Sistemleri İleri Konular  
### 🔹 Kategori: Sürüm ve Uyumluluk Yönetimi  
#### ✅ Cevap 1302: Eklenti arayüzlerinde sürüm ve uyumluluk

Eklenti API'lerinde sürüm yönetimi, ana uygulama ile eklentiler arasında uyumluluğu korumak için gereklidir. Rust'ta sürüm numarası alanı ekleyerek veya trait'lerde varsayılan metotlar kullanarak uyumluluk sağlanabilir.

```rust
trait Plugin {
    fn version(&self) -> u32 { 1 }
    fn name(&self) -> &str;
}

struct OldPlugin;
impl Plugin for OldPlugin {
    fn name(&self) -> &str { "Old" }
}

struct NewPlugin;
impl Plugin for NewPlugin {
    fn version(&self) -> u32 { 2 }
    fn name(&self) -> &str { "New" }
}

fn load_plugin(plugin: &dyn Plugin) {
    println!("Plugin: {} (v{})", plugin.name(), plugin.version());
}

fn main() {
    let old = OldPlugin;
    let new = NewPlugin;
    load_plugin(&old);
    load_plugin(&new);
}
```
