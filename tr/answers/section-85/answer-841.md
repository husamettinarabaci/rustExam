## 📘 Bölüm: Test ve Hata Ayıklama
### 🔹 Kategori: Özellik Tabanlı Testler
#### ✅ Cevap 841: `proptest` ile özellik tabanlı testler yazma

`proptest` kütüphanesi, fonksiyonların çok çeşitli otomatik üretilmiş girdilerle test edilmesini sağlar. Özellik tabanlı testlerde, belirli bir özelliğin her zaman geçerli olması beklenir. Test başarısız olursa, `proptest` en küçük başarısız örneği bulmaya çalışır.

```rust
use proptest::prelude::*;

// Test edilen fonksiyon: toplama işlemi
fn add(a: i32, b: i32) -> i32 {
    a + b
}

proptest! {
    #[test]
    fn test_addition_commutative(a in -1000..1000, b in -1000..1000) {
        prop_assert_eq!(add(a, b), add(b, a));
    }
}
```

Bu örnekte, toplama işleminin değişmeli (commutative) olduğu özelliği test edilir. `proptest`, başarısızlık durumunda en küçük başarısız örneği raporlar.
