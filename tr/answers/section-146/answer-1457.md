## 📘 Bölüm: İleri Eklenti Mimarileri  
### 🔹 Kategori: Çoklu Eklenti Sistemlerini Test Etme  
#### ✅ Cevap 1457: Çoklu eklenti sistemlerini test etme

Çoklu eklenti sistemlerinde test, eklentilerin birlikte sorunsuz çalışmasını garanti eder. Rust'ta mocking, entegrasyon testleri ve hata ayıklama teknikleriyle çoklu eklenti senaryoları test edilebilir.

Aşağıda, birden fazla eklentinin test edildiği basit bir örnek verilmiştir:

```rust
trait Plugin { fn name(&self) -> &str; }
struct PluginA; impl Plugin for PluginA { fn name(&self) -> &str { "A" } }
struct PluginB; impl Plugin for PluginB { fn name(&self) -> &str { "B" } }

fn test_plugins() {
    let plugins: Vec<Box<dyn Plugin>> = vec![Box::new(PluginA), Box::new(PluginB)];
    for p in plugins { println!("Plugin: {}", p.name()); }
}
```
Bu kodda, iki eklenti birlikte test edilmekte ve çıktıları kontrol edilmektedir.
