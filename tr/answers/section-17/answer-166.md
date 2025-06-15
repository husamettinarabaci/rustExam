## 📘 Bölüm: İleri Düzey Desenler  
### 🔹 Kategori: Desenlerde `@` bağlamalarını kullanma  
#### ✅ Cevap 166: Desenlerde `@` bağlamalarını kullanma

Bu örnekte, desen eşlemede `@` bağlamasının nasıl kullanılacağı gösterilmektedir. `@` sözdizimi, bir değeri hem bir aralığa göre eşleştirip hem de bir değişkene bağlamanızı sağlar.

```rust
fn main() {
    let value = 8;
    match value {
        n @ 1..=5 => println!("{} 1 ile 5 arasında", n),
        n @ 6..=10 => println!("{} 6 ile 10 arasında", n),
        n => println!("{} belirtilen aralıkların dışında", n),
    }
}
```
