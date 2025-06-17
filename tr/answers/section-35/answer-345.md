## 📘 Bölüm: Test ve Hata Ayıklama  
### 🔹 Kategori: Entegrasyon Testleri  
#### ✅ Cevap 345: `tests/` dizininde entegrasyon testleri yazma

Rust projelerinde entegrasyon testleri, proje kökünde `tests/` klasöründe ayrı dosyalarda yazılır. Bu testler, kütüphanenizin herkese açık API'sini dışarıdan kullanıyormuş gibi test eder. Her dosya bağımsız bir crate gibi derlenir.

Aşağıda örnek bir entegrasyon testi gösterilmiştir:

```rust
// tests/integration_test.rs
the use of your library
use my_crate::add;

#[test]
fn test_add() {
    assert_eq!(add(2, 3), 5);
}
```

Burada `my_crate` ana kütüphanenizdeki `add` fonksiyonunu test etmektedir. Test fonksiyonu `#[test]` ile işaretlenir ve doğrulama için `assert_eq!` kullanılır.
