## 📘 Bölüm: Eklenti Sistemi Testi ve Bakımı  
### 🔹 Kategori: Testlerde Eklenti Sürüm Uyumluluğu Yönetimi  
#### ✅ Cevap 1405: Testlerde eklenti sürüm uyumluluğu yönetimi

Sürüm uyumluluğu testlerinde, eklenti ve ana uygulama sürümleri karşılaştırılır. Uyumsuzluk durumunda test başarısız olur ve raporlanır.

```rust
struct Plugin {
    version: &'static str,
}

struct Host {
    required_version: &'static str,
}

fn is_compatible(plugin: &Plugin, host: &Host) -> bool {
    plugin.version == host.required_version
}

#[test]
fn test_version_compatibility() {
    let plugin = Plugin { version: "1.2.0" };
    let host = Host { required_version: "1.2.0" };
    assert!(is_compatible(&plugin, &host));

    let plugin2 = Plugin { version: "1.1.0" };
    assert!(!is_compatible(&plugin2, &host));
}
```
