## 📘 Bölüm: Rust'ta Alan Özel Dilleri (DSL)
### 🔹 Kategori: Prosedürel makrolarla AST yapıları üretme
#### ✅ Cevap 897: Prosedürel makrolarla AST yapıları üretme

Çözümde, prosedürel makro ile AST düğümü üretimi örneklenmiştir. Prosedürel makrolar, Rust'ta kodu derleme zamanında dönüştürmek için kullanılır.

```rust
// dsl_macros/src/lib.rs
use proc_macro::TokenStream;
use quote::quote;
use syn::{parse_macro_input, LitInt};

#[proc_macro]
pub fn num(input: TokenStream) -> TokenStream {
    let lit = parse_macro_input!(input as LitInt);
    let n = lit.base10_parse::<i32>().unwrap();
    TokenStream::from(quote! { AST::Num(#n) })
}
```

Kullanım:
```rust
// main.rs
use dsl_macros::num;

#[derive(Debug)]
enum AST {
    Num(i32),
}

fn main() {
    let ast = num!(42);
    println!("{:?}", ast); // Çıktı: Num(42)
}
```
