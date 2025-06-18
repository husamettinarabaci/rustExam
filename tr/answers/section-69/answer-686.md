## 📘 Bölüm: Macro Rules ve Deklaratif Makrolar  
### 🔹 Kategori: Deklaratif ve prosedürel makroları birleştirme  
#### ✅ Cevap 686: Deklaratif ve prosedürel makroları birleştirme

Bu soruda, Rust'ta deklaratif (`macro_rules!`) ve prosedürel makroların birlikte nasıl kullanılabileceği gösterilir. Deklaratif makro, prosedürel makro ile türetilmiş bir yapıyı işler.

```rust
// Procedural macro crate (my_derive)
// #[derive(MyTrait)] procedural macro would be defined here

// Main crate
derive(MyTrait)]
struct Data;

macro_rules! print_type {
    ($t:ty) => {
        println!("Type: {}", stringify!($t));
    };
}

fn main() {
    print_type!(Data);
}
```
Burada, `Data` yapısı prosedürel makro ile türetilmiş, `print_type!` ise deklaratif makro ile türü yazdırır. Gerçek prosedürel makro için ayrı crate gerekir.
