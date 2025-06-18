## 📘 Bölüm: Macro Rules ve Deklaratif Makrolar  
### 🔹 Kategori: Crate'lerden makro dışa aktarma  
#### ✅ Cevap 688: Crate'lerden makro dışa aktarma

Bu soruda, bir makronun başka bir crate'de kullanılabilmesi için `#[macro_export]` özniteliği ile dışa aktarılması gösterilir.

```rust
// my_macros crate
#[macro_export]
macro_rules! say_hello {
    () => {
        println!("Hello from macro!");
    };
}
```
Başka bir crate'de kullanmak için:
```rust
// main crate
your_crate::say_hello!();
```
`#[macro_export]` makronun crate dışına açılmasını sağlar.
