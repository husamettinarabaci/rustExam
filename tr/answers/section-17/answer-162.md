## 📘 Bölüm: İleri Düzey Desenler  
### 🔹 Kategori: Desen Koruyucular (Pattern Guard)  
#### ✅ Cevap 162: Match kollarında desen koruyucular (pattern guard) kullanma

Rust'ta match kollarında desen koruyucu (pattern guard) ile ek koşullar ekleyebilirsiniz. İşte bir örnek:

```rust
enum Sayi {
    Deger(i32),
    Yok,
}

fn main() {
    let sayi = Sayi::Deger(7);

    match sayi {
        Sayi::Deger(n) if n > 0 => println!("Pozitif: {}", n),
        Sayi::Deger(n) if n < 0 => println!("Negatif: {}", n),
        Sayi::Deger(0) => println!("Sıfır"),
        Sayi::Yok => println!("Değer yok"),
    }
}
```
