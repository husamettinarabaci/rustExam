## 📘 Bölüm: Prosedürel Makrolar ve Kod Üretimi  
### 🔹 Kategori: Makro Hijyeni ve İsim Çakışmaları  
#### ✅ Cevap 616: Hijyen yönetimi ve isim çakışmalarından kaçınma

Makro hijyeni, makroların oluşturduğu tanımlayıcıların kullanıcı kodundaki isimlerle çakışmamasını sağlar. Prosedürel makrolarda `quote::format_ident!` ile benzersiz değişken isimleri üretebilirsiniz:

```rust
use proc_macro::TokenStream;
use quote::{quote, format_ident};
use syn::{parse_macro_input, ItemFn};

#[proc_macro_attribute]
pub fn add_temp_var(_attr: TokenStream, item: TokenStream) -> TokenStream {
    let input = parse_macro_input!(item as ItemFn);
    let name = &input.sig.ident;
    let block = &input.block;
    let vis = &input.vis;
    let sig = &input.sig;
    let temp_var = format_ident!("__my_macro_temp_var");
    let gen = quote! {
        #vis #sig {
            let #temp_var = 42;
            #block
        }
    };
    gen.into()
}
```

Bu makro, çakışmayı önlemek için benzersiz bir değişken ismi ekler. Makro hijyeni, üretilen kodun güvenli ve öngörülebilir olmasını sağlar.
