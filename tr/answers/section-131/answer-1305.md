## 📘 Bölüm: Eklenti Sistemleri İleri Konular  
### 🔹 Kategori: Platformlar Arası Eklenti Yazma  
#### ✅ Cevap 1305: Platformlar arası eklenti yazma

Platformlar arası eklenti geliştirme, eklentilerin farklı işletim sistemlerinde sorunsuz çalışmasını sağlar. Rust'ta koşullu derleme (`cfg` özniteliği) ile platforma özel kod yazılabilir.

```rust
trait Plugin {
    fn info(&self) -> String;
}

struct OsPlugin;

impl Plugin for OsPlugin {
    fn info(&self) -> String {
        #[cfg(target_os = "windows")]
        { "Windows plugin".to_string() }
        #[cfg(target_os = "linux")]
        { "Linux plugin".to_string() }
        #[cfg(target_os = "macos")]
        { "macOS plugin".to_string() }
    }
}

fn main() {
    let plugin = OsPlugin;
    println!("{}", plugin.info());
}
```
