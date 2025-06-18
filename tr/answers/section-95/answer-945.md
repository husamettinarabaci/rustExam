## 📘 Bölüm: Metaprogramlama ve Yansıma
### 🔹 Kategori: Alan-Özel Attribute Makroları
#### ✅ Cevap 945: Alan özel kullanım için attribute makrolar oluşturma

Attribute makroları, fonksiyon, struct gibi öğeleri etiketleyen ve kodu dönüştüren/gener eden prosedürel makrolardır. Derive makrolarından (yalnızca struct/enum) ve fonksiyon benzeri makrolardan (fonksiyon çağrısı gibi) farklıdır.

Örnek: Fonksiyon girişinde loglama yapan özel attribute makrosu:

```rust
// Prosedürel makro crate'inde
#[proc_macro_attribute]
pub fn giris_logu(_attr: TokenStream, item: TokenStream) -> TokenStream {
    // Fonksiyonu ayrıştır, girişte log ekle
    // ...
    item
}
```

Kullanım:
```rust
#[giris_logu]
fn fonksiyonum() {
    // ...
}
```

En iyi uygulamalar: makroları basit tutmak, iyi dokümante etmek ve hataları zarifçe yönetmek. Sınırlar: hata ayıklama zor olabilir, yanlış kullanımda kafa karıştırıcı hatalar oluşabilir.
