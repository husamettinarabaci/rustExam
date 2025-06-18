## 📘 Bölüm: Derleme Zamanı Yansıma ve İçgörü
### 🔹 Kategori: Derleme Zamanı Yansıma
#### ✅ Cevap 1472: İçgörü için özel derive makroları implementasyonu

Rust'ta özel derive makroları ile bir struct'ın alanları hakkında derleme zamanında bilgi toplanabilir. Procedural macro ile alan adları ve tipleri elde edilip, ek fonksiyonlar üretilebilir.

```rust
// my_derive crate'inde procedural macro
#[proc_macro_derive(FieldNames)]
pub fn field_names_derive(input: TokenStream) -> TokenStream {
    // syn ve quote ile alan adlarını çıkarıp kod üretimi yapılır
    // ...
}

// Kullanım:
#[derive(FieldNames)]
struct User { id: u32, name: String }

// Derive makrosu ile User::field_names() gibi bir fonksiyon üretilir.
```
