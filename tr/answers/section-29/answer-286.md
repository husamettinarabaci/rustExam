## 📘 Bölüm: Desen Eşleme ve Kontrol Akışı  
### 🔹 Kategori: Match Koruyucuları ve Koşullu Eşleme  
#### ✅ Cevap 286: `|` ve `_` ile desenleri birleştirme

Bu soruda, `match` kollarında `|` ile birden fazla desen ve `_` ile joker desen kullanımı gösterilmektedir. `|` operatörü ile birden fazla değeri aynı kolda eşleyebilir, `_` ile ise tüm diğer durumları yakalayabilirsiniz.

```rust
fn main() {
    let x = 7;
    match x {
        1 | 3 | 5 => println!("Tek ve Küçük"),
        2 | 4 => println!("Çift ve Küçük"),
        6 | 7 | 8 => println!("Orta"),
        _ => println!("Diğer"),
    }
}
```
