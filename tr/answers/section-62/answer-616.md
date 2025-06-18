## 📘 Bölüm: Prosedürel Makrolar ve Kod Üretimi  
### 🔹 Kategori: Prosedürel makrolarla AST yapıları üretme  
#### ✅ Cevap 616: Prosedürel makrolarla AST yapıları üretme

Bu çözümde, bir procedural macro crate ile DSL ifadesini parse edip enum tabanlı bir AST'ye dönüştüren bir makro yazılır. Gerçek uygulamada, procedural macro ayrı bir crate olarak yazılır.

```rust
// procedural_macro_crate/src/lib.rs
use proc_macro::TokenStream;

#[proc_macro]
pub fn dsl_ast(input: TokenStream) -> TokenStream {
    // Burada parse işlemi ve AST üretimi yapılır (örnek için sabit AST döndürülüyor)
    let expanded = quote::quote! {
        Expr::Add(Box::new(Expr::Number(1)), Box::new(Expr::Number(2)))
    };
    expanded.into()
}

// main.rs
enum Expr {
    Number(i32),
    Add(Box<Expr>, Box<Expr>),
}

fn main() {
    let ast = dsl_ast!(add(1, 2));
    // ast: Expr::Add(Box::new(Expr::Number(1)), Box::new(Expr::Number(2)))
}
```
