## 📘 Bölüm: Prosedürel Makrolar ve Kod Üretimi  
### 🔹 Kategori: Rust Sözdizimini Ayrıştırma  
#### ✅ Cevap 612: `syn` crate ile Rust sözdizimini ayrıştırma

`syn` crate, prosedürel makrolarda Rust kodunu sözdizim ağacına ayrıştırmak için yaygın olarak kullanılır. Burada, bir struct'ı ayrıştırıp adını ve alanlarını derleme zamanında yazdıran bir derive makrosu örneği verilmiştir.

```rust
use proc_macro::TokenStream;
use quote::quote;
use syn::{parse_macro_input, DeriveInput};

#[proc_macro_derive(PrintStructInfo)]
pub fn print_struct_info(input: TokenStream) -> TokenStream {
    let input = parse_macro_input!(input as DeriveInput);
    let name = &input.ident;
    if let syn::Data::Struct(data_struct) = &input.data {
        for field in &data_struct.fields {
            if let Some(ident) = &field.ident {
                println!("Alan: {}", ident);
            }
        }
    }
    let expanded = quote! {
        // ...
    };
    expanded.into()
}
```

Bu makro, `syn` ile struct'ı ayrıştırır ve alan adlarını yazdırır. Gerçek makrolarda kullanıcıya geri bildirim için `compile_error!` veya üretilen kod kullanılır, `println!` doğrudan kullanılmaz.
