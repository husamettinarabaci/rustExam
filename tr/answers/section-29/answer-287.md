## 📘 Bölüm: Desen Eşleme ve Kontrol Akışı  
### 🔹 Kategori: Match Koruyucuları ve Koşullu Eşleme  
#### ✅ Cevap 287: Match kollarında `@` bağlamaları kullanımı

Bu soruda, `match` kollarında `@` bağlaması ile aralık eşlemesi ve değerin kullanımı gösterilmektedir. `@` ile bir değeri hem aralıkta kontrol edebilir hem de o değeri bir değişkene bağlayarak kullanabilirsiniz.

```rust
fn main() {
    let x = 15;
    match x {
        n @ 10..=20 => println!("Aralıkta: {}", n),
        0 => println!("Sıfır"),
        _ => println!("Aralık Dışı"),
    }
}
```
