## 📘 Bölüm: Kontrol Akışı  
### 🔹 Kategori: Desen Eşleme  
#### ✅ Cevap 23: `match` ile sayıya göre çıktı üretme

**Açıklama:**

Rust'ta `match` ifadesi, bir değeri desenlerle karşılaştırıp uygun kodu çalıştırmanızı sağlar.

```rust
fn main() {
    let sayi = 2;
    match sayi {
        1 => println!("Bir"),
        2 => println!("İki"),
        _ => println!("Diğer"),
    }
}
```
