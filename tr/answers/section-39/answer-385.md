## 📘 Bölüm: İleri Düzey Desen Eşleme
### 🔹 Kategori: Match koruyucuları ve karmaşık koşullar
#### ✅ Cevap 385: Match koruyucuları ve karmaşık koşullar

Bu soruda, match ifadesinde koruyucu (guard) kullanılarak farklı koşullara göre çıktı üretilir. Bu, Rust'ta desen eşleme ile koşullu kontrolün nasıl yapılacağını gösterir.

```rust
fn main() {
    let num = 7;
    match num {
        n if n < 0 => println!("Negative number"),
        n if n == 0 => println!("Zero"),
        n if n % 2 == 0 => println!("Even number"),
        _ => println!("Odd number"),
    }
}
```
