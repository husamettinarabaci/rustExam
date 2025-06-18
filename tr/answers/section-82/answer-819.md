## 📘 Bölüm: İleri Makro Tasarımı  
### 🔹 Kategori: Prosedürel Makrolar  
#### ✅ Cevap 819: Derleme zamanı doğrulama ile makro testleri

Bu örnekte, bir prosedürel makro ile derleme zamanında bir özelliğin doğrulanması sağlanır. Yanlış kullanımda derleyici hata verir.

```rust
// my_macro crate
use proc_macro::TokenStream;

#[proc_macro_attribute]
pub fn must_be_hello(_attr: TokenStream, item: TokenStream) -> TokenStream {
    let input = item.to_string();
    if !input.contains("hello") {
        return syn::Error::new_spanned(
            syn::parse_macro_input!(item as syn::ItemFn),
            "Function must contain 'hello' in its name!"
        ).to_compile_error().into();
    }
    item
}
```

Kullanım örneği:

```rust
#[must_be_hello]
fn hello_world() {}

// #[must_be_hello]
// fn world() {} // Derleme zamanı hatası!
```
