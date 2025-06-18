## 📘 Bölüm: Prosedürel Makrolar ve Kod Üretimi  
### 🔹 Kategori: Derive Makroları  
#### ✅ Cevap 611: Temel bir derive makrosu yazma

Bu örnekte, `Hello` adında bir trait ve bunu otomatik olarak uygulayan bir derive makrosu tanımlanır. Makro, `syn` ve `quote` crate'leriyle yazılır.

```rust
// hello_derive/src/lib.rs
use proc_macro::TokenStream;
use quote::quote;
use syn;

#[proc_macro_derive(Hello)]
pub fn hello_derive(input: TokenStream) -> TokenStream {
    let ast = syn::parse(input).unwrap();
    impl_hello(&ast)
}

fn impl_hello(ast: &syn::DeriveInput) -> TokenStream {
    let name = &ast.ident;
    let gen = quote! {
        impl Hello for #name {
            fn hello(&self) {
                println!("Hello, I am a {}!", stringify!(#name));
            }
        }
    };
    gen.into()
}
```

Kullanım:

```rust
// main.rs
use hello_derive::Hello;

trait Hello {
    fn hello(&self);
}

#[derive(Hello)]
struct MyStruct;

fn main() {
    MyStruct.hello();
}
```
Makro, struct'a otomatik olarak `Hello` trait'ini uygular ve `hello` fonksiyonunu ekler.
