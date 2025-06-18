## 📘 Bölüm: İleri Test ve Biçimsel Doğrulama  
### 🔹 Kategori: Test vakalarını ve kapsamını dokümante etme  
#### ✅ Cevap 960: Test vakalarını ve kapsamını dokümante etme

Test dokümantasyonu, hangi durumların test edildiğini ve kapsamın ne olduğunu açıkça belirtir. Rust'ta test fonksiyonlarına açıklayıcı yorumlar eklenerek veya ayrı bir dokümantasyon dosyasıyla bu sağlanabilir.

```rust
/// add fonksiyonu için testler:
/// - Pozitif sayılar
/// - Negatif sayılar
/// - Sıfır
#[test]
fn test_add_cases() {
    assert_eq!(add(2, 3), 5); // Pozitif
    assert_eq!(add(-2, -3), -5); // Negatif
    assert_eq!(add(0, 0), 0); // Sıfır
}
```
Bu şekilde, test kapsamı ve vakaları kolayca izlenebilir.
