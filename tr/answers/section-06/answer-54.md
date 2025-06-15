## 📘 Bölüm: Fonksiyonlar II  
### 🔹 Kategori: Fonksiyon Döndüren Fonksiyonlar  
#### ✅ Cevap 54: Fonksiyon döndüren fonksiyon

Rust'ta fonksiyonlardan closure döndürmek için `impl Fn` kullanılabilir. Burada dıştaki fonksiyon, kendisine verilen sayının karesini alan bir closure döndürür.

```rust
fn kare_yapici() -> impl Fn(i32) -> i32 {
    |x| x * x
}

fn main() {
    let kare = kare_yapici();
    let sonuc = kare(6);
    println!("Kare: {}", sonuc); // Çıktı: Kare: 36
}
```
