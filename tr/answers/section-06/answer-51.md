## 📘 Bölüm: Fonksiyonlar II  
### 🔹 Kategori: Kapsam ve Ömür  
#### ✅ Cevap 51: Fonksiyon kapsamı ve değişken ömrü

Rust'ta değişkenler yalnızca tanımlandıkları kapsamda geçerlidir. Kapsam sona erdiğinde değişken bellekten silinir ve erişilemez.

```rust
fn kapsam_yazdir() {
    let x = 10;
    println!("Fonksiyon içinde x: {}", x); // x burada geçerli
}

fn main() {
    kapsam_yazdir();
    // println!("Fonksiyon dışında x: {}", x); // Hata: x bu kapsamda tanımlı değil
}
```
