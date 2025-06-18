## 📘 Bölüm: Macro Rules ve Deklaratif Makrolar  
### 🔹 Kategori: macro_rules! ile tekrar ve otomasyon  
#### ✅ Cevap 681: Tekrarlı kod için `macro_rules!` makroları yazma

Bu soruda, Rust'ta tekrarlı kodu azaltmak için `macro_rules!` ile bir makro tanımlanır. Makro, birden fazla değişkeni tek seferde tanımlamayı sağlar.

```rust
macro_rules! define_vars {
    ($($name:ident),*) => {
        $(let $name = 0;)*
    };
}

fn main() {
    define_vars!(a, b, c);
    println!("{} {} {}", a, b, c);
}
```
Makro, verilen isimlerde değişkenleri otomatik olarak oluşturur ve başlatır.
