## 📘 Bölüm: Eklenti Sistemi Testi ve Bakımı  
### 🔹 Kategori: Eklenti Sistemi Testi ve Bakımı  
#### ✅ Cevap 1402: Ana uygulama ile entegrasyon testleri

Entegrasyon testleri, eklenti ile ana uygulamanın birlikte doğru çalışıp çalışmadığını kontrol eder. Rust'ta entegrasyon testleri `tests/` klasöründe ayrı dosyalarda yazılır.

```rust
// src/lib.rs
your_plugin_function();

// tests/integration_test.rs
use your_crate::your_plugin_function;

#[test]
fn test_plugin_integration() {
    assert_eq!(your_plugin_function(), expected_value);
}
```
Entegrasyon testleri, sistemin tüm parçalarının uyumlu çalışmasını garanti altına alır.
