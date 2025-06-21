## 📘 Bölüm: Prosedürel Makrolar ve Kod Üretimi  
### 🔹 Kategori: Alan-Özel Dil (DSL) Makroları  
#### ✅ Cevap 615: Alan-özel diller için prosedürel makrolar

Prosedürel makrolar, özel DSL'ler oluşturmak için girdi tokenlarını ayrıştırıp Rust kodu üretebilir. Aşağıda aritmetik ifadeler için mini bir DSL makrosu örneği verilmiştir:

```rust
use proc_macro::TokenStream;
use quote::quote;
use syn::{parse_macro_input, LitInt, Token, parse::Parse, parse::ParseStream};

struct AddExpr {
    left: LitInt,
    _plus: Token![+],
    right: LitInt,
}

impl Parse for AddExpr {
    fn parse(input: ParseStream) -> syn::Result<Self> {
        Ok(AddExpr {
            left: input.parse()?,
            _plus: input.parse()?,
            right: input.parse()?,
        })
    }
}

#[proc_macro]
pub fn add_expr(input: TokenStream) -> TokenStream {
    let AddExpr { left, right, .. } = parse_macro_input!(input as AddExpr);
    let expanded = quote! {
        #left + #right
    };
    expanded.into()
}
```

Bu makro ile `add_expr!(2 + 3)` yazıldığında, Rust kodunda `2 + 3` olarak genişletilir.
