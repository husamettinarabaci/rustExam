## 📘 Bölüm: Derleme Zamanı Motorları ve Metaprogramlama
### 🔹 Kategori: Statik Doğrulamalar
#### ✅ Cevap 1275: Statik doğrulamalar ve değişmezler

Statik doğrulamalar, değişmezleri derleme zamanında zorlayabilir. Örnek:

```rust
use static_assertions::const_assert;

struct BenimYapim {
    a: u8,
    b: u8,
}

const_assert!(std::mem::size_of::<BenimYapim>() == 2);
```

Doğrulama başarısız olursa derleme hata verir.
