## 📘 Bölüm: Enumlar I  
### 🔹 Kategori: Enumlarda Desen Eşleme ve Yazdırma  
#### ✅ Cevap 104: Enum ve `match` ile yazdırma

Bu örnekte, bir enum üzerinde `match` ifadesiyle her varyant için farklı mesaj nasıl yazdırılır gösterilmektedir.

```rust
enum Komut {
    Baslat,
    Durdur(String),
}

fn main() {
    let komut = Komut::Durdur(String::from("Acil durum"));
    match komut {
        Komut::Baslat => println!("Başlatılıyor..."),
        Komut::Durdur(neden) => println!("Durduruldu: {}", neden),
    }
}
```
