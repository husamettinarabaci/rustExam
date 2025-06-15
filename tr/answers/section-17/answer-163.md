## 📘 Bölüm: İleri Düzey Desenler  
### 🔹 Kategori: Aralıklar ve Bağlamalar Üzerinde Eşleme  
#### ✅ Cevap 163: Aralıklar ve bağlamalar üzerinde eşleme

Bu örnekte, Rust'ta aralıklar ve değişken bağlamaları ile desen eşleme gösterilmektedir. `match` ifadesi ile tamsayı değerleri aralıklara göre eşleyebilir ve `@` sözdizimi ile eşleşen değeri bir değişkene bağlayabilirsiniz. Bu, değerin hangi aralığa düştüğünü kolayca belirlemenizi sağlar.

```rust
fn main() {
    let value = 7;
    match value {
        n @ 1..=5 => println!("{} 1 ile 5 arasında", n),
        n @ 6..=10 => println!("{} 6 ile 10 arasında", n),
        n => println!("{} belirtilen aralıkların dışında", n),
    }
}
```
