## 📘 Bölüm: Makrolar ve Metaprogramlama  
### 🔹 Kategori: Attribute Makrolar  
#### ✅ Cevap 208: Attribute makro yazma

Attribute makrolar, fonksiyon gibi öğelerin davranışını değiştirir. Prosedürel makro crate'inde `proc_macro_attribute` ile tanımlanır.

```rust
// Prosedürel makro crate'inizde:
use proc_macro::TokenStream;

#[proc_macro_attribute]
pub fn once_yaz(_attr: TokenStream, item: TokenStream) -> TokenStream {
    let sonuc = format!(
        "fn sarildi() {{ println!(\"Önce!\"); {} }}",
        item
    );
    sonuc.parse().unwrap()
}
```
