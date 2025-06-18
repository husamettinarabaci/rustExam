## 📘 Bölüm: Derleyici Eklentileri ve Özel Lintler  
### 🔹 Kategori: Kod Analizi için Prosedürel Makrolar  
#### ✅ Cevap 827: Kod analizi için prosedürel makrolar kullanma

Prosedürel makrolar, kodun derleme zamanında analiz edilmesini sağlar. Örneğin, bir fonksiyonun parametre sayısını kontrol eden bir makro yazılabilir:

```rust
use proc_macro::TokenStream;

#[proc_macro_attribute]
pub fn check_params(_attr: TokenStream, item: TokenStream) -> TokenStream {
    let input = syn::parse_macro_input!(item as syn::ItemFn);
    if input.sig.inputs.len() > 3 {
        return syn::Error::new_spanned(
            input.sig,
            "Function has too many parameters!"
        ).to_compile_error().into();
    }
    item
}
```

Bu tür makrolar ile parametre kontrolü, isim denetimi, dokümantasyon varlığı gibi analizler yapılabilir.
