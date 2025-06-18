## 📘 Bölüm: Eklenti Mimarileri  
### 🔹 Kategori: Dinamik Yükleme ve Eklenti Sistemleri  
#### ✅ Cevap 1259: Prosedürel makrolarla eklenti yazma

Rust'ta prosedürel makrolar ile eklenti geliştirmek için ayrı bir crate olarak makro yazılır. Bu makro ana uygulama veya başka crate'ler tarafından kullanılabilir. Avantajı, derleme zamanında kod üretimi ve tekrarı azaltmasıdır; ancak çalışma zamanı dinamikliği yoktur.

Örnek prosedürel makro:
```rust
// eklenti-makro/src/lib.rs
use proc_macro::TokenStream;

#[proc_macro_derive(MyTrait)]
pub fn my_trait_derive(_item: TokenStream) -> TokenStream {
    // Kod üretimi burada yapılır
    TokenStream::new()
}
```

Ana uygulama bu makroyu `derive(MyTrait)` ile kullanır. Prosedürel makro eklentileri, ana uygulamaya derleme zamanı bağımlılığı ile entegre olur.
