## 📘 Bölüm: Makrolar ve Metaprogramlama  
### 🔹 Kategori: Prosedürel Makrolar  
#### ✅ Cevap 206: Prosedürel makro oluşturma

Prosedürel makrolar, Rust kodunu girdi olarak alıp çıktı olarak kod üretir. Ayrı bir crate'te `proc-macro = true` ile tanımlanır.

```rust
// Prosedürel makro crate'inizde:
use proc_macro::TokenStream;

#[proc_macro]
pub fn benim_makrom(_item: TokenStream) -> TokenStream {
    "fn uretildi() { println!(\"Makrodan merhaba!\"); }".parse().unwrap()
}
```
