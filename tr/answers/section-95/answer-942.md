## 📘 Bölüm: Metaprogramlama ve Yansıma
### 🔹 Kategori: Prosedürel Makrolar ve Kod İçgörüsü
#### ✅ Cevap 942: Kod içgörüsü için prosedürel makrolar kullanımı

Prosedürel makrolar, derleme zamanında kodun soyut sözdizim ağacı (AST) üzerinde çalışan Rust fonksiyonlarıdır. Deklaratif makrolardan (`macro_rules!`) farklı olarak, kod yapısını analiz edip dönüştürebilirler.

Örnek: Alan adlarını derleme zamanında yazdıran bir derive makrosu (basitleştirilmiş):

```rust
// Prosedürel makro crate'inde
#[proc_macro_derive(PrintFields)]
pub fn print_fields(input: TokenStream) -> TokenStream {
    let ast = syn::parse(input).unwrap();
    // syn ile struct alanlarını incele
    // Alan adlarını yazdıran kod üret
    // ...
    TokenStream::new()
}
```

Kullanım alanları: kod üretimi, özel derive'lar, doğrulama. Sınırlar: yalnızca derleme zamanında çalışır, çalışma zamanı değerlerine erişemez ve ayrı crate gerektirir. Güçlü metaprogramlama sağlar ancak derleme sürecine karmaşıklık ekler.
