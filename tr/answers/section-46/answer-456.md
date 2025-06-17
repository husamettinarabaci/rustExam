## 📘 Bölüm: Test ve Hata Ayıklama  
### 🔹 Kategori: Entegrasyon Testleri  
#### ✅ Cevap 456: `tests/` klasöründe entegrasyon testleri yazma

Entegrasyon testleri, `tests/` klasöründe ayrı dosyalarda yazılır ve crate'in herkese açık API'sini test eder.

```rust
// tests/integration_test.rs
dependency_crate::some_function();

#[test]
fn test_public_api() {
    assert_eq!(dependency_crate::add(2, 2), 4);
}
```

Terminalde:

```
cargo test
```
