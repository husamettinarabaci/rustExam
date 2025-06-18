## 📘 Bölüm: İleri Makro Tasarımı  
### 🔹 Kategori: Alan özel kullanım için attribute makrolar oluşturma  
#### ✅ Cevap 812: Alan özel kullanım için attribute makrolar oluşturma

Aşağıda, bir fonksiyonu otomatik olarak zaman ölçerle saran alan özel bir attribute makro örneği verilmiştir. Bu makro, fonksiyonun çalışma süresini ölçer ve ekrana yazdırır.

```rust
// Cargo.toml'da dependencies:
// syn = "2"
// quote = "1"
// proc-macro2 = "1"
// [lib]
// proc-macro = true

use proc_macro::TokenStream;
use quote::quote;
use syn::{parse_macro_input, ItemFn};

#[proc_macro_attribute]
pub fn timed(_attr: TokenStream, item: TokenStream) -> TokenStream {
    let input = parse_macro_input!(item as ItemFn);
    let name = &input.sig.ident;
    let block = &input.block;
    let vis = &input.vis;
    let sig = &input.sig;
    let gen = quote! {
        #vis #sig {
            let start = std::time::Instant::now();
            let result = (|| #block )();
            println!("Function {} took: {:?}", stringify!(#name), start.elapsed());
            result
        }
    };
    gen.into()
}
```

Kullanım:
```rust
#[timed]
fn my_func() {
    // ...
}
// my_func() çağrıldığında çalışma süresi ekrana yazılır.
```
