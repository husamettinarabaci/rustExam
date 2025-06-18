## 📘 Bölüm: Unsafe Kod Desenleri ve Güvenlik
### 🔹 Kategori: Unsafe API'lerde güvenlik değişmezlerini dokümante etme
#### ✅ Cevap 660: Unsafe API'lerde güvenlik değişmezlerini dokümante etme

Unsafe API'lerde güvenlik değişmezlerini dokümante etmek kritiktir. Çağıranın güvenlik için neyi garanti etmesi gerektiğini açıkça belirtin.

```rust
/// # Güvenlik
///
/// `ptr` geçerli ve `T` için doğru hizalanmış olmalı.
unsafe fn ptr_coz<T>(ptr: *const T) -> T {
    // GÜVENLİK: Çağıran ptr'nin geçerli olduğunu garanti etmeli.
    *ptr
}
```

Açık dokümantasyon, kullanıcıların tanımsız davranıştan kaçınmasına ve kod incelemesini kolaylaştırır.
