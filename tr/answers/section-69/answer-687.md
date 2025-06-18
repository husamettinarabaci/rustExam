## 📘 Bölüm: Macro Rules ve Deklaratif Makrolar  
### 🔹 Kategori: Makro genişletmelerini hata ayıklama  
#### ✅ Cevap 687: Makro genişletmelerini hata ayıklama

Bu soruda, Rust'ta makro genişletmesini görmek için `cargo expand` gibi araçlar kullanılır. Bu araç, makronun derleyici tarafından nasıl genişletildiğini gösterir.

```rust
macro_rules! hello {
    () => {
        println!("Hello, macro!");
    };
}

fn main() {
    hello!();
}
```
`cargo expand` ile genişletilmiş hali:
```rust
fn main() {
    {
        println!("Hello, macro!");
    }
}
```
Bu şekilde makro genişlemesi kolayca incelenebilir ve hata ayıklanabilir.
