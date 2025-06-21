## 📘 Bölüm: Prosedürel Makrolar ve Kod Üretimi  
### 🔹 Kategori: Makro Crate Organizasyonu  
#### ✅ Cevap 620: Makro crate'lerini organize etme ve paketler arası makro paylaşımı

Prosedürel makrolar, `Cargo.toml`'da `proc-macro = true` olarak tanımlanmış ayrı bir crate'te bulunmalıdır. Makroları diğer paketlerde kullanmak için:

- Ayrı bir crate (ör. `my_macros`) oluşturun ve `proc-macro = true` olarak ayarlayın.
- Makrolarınızı bu crate'te tanımlayın.
- Ana crate'inize `my_macros` bağımlılığını ekleyin ve makroları `use my_macros::my_macro;` ile kullanın.

**Örnek:**

`my_macros/Cargo.toml`:
```toml
[lib]
proc-macro = true
```

`my_macros/src/lib.rs`:
```rust
use proc_macro::TokenStream;
#[proc_macro]
pub fn my_macro(_item: TokenStream) -> TokenStream {
    // ...
    _item
}
```

`main_crate/Cargo.toml`:
```toml
[dependencies]
my_macros = { path = "../my_macros" }
```

`main_crate/src/main.rs`:
```rust
use my_macros::my_macro;

my_macro! {
    // ...
}
```

Bu yapı, makroların birden fazla pakette paylaşılmasını ve yeniden kullanılmasını sağlar.
