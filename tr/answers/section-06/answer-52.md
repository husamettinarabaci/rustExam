## 📘 Bölüm: Fonksiyonlar II  
### 🔹 Kategori: İç İçe Çağrılar  
#### ✅ Cevap 52: İç içe fonksiyon çağrıları

Rust'ta bir fonksiyonun dönüş değerini başka bir fonksiyona argüman olarak vererek iç içe fonksiyon çağrısı yapılabilir.

```rust
fn add_one(x: i32) -> i32 {
    x + 1
}

fn double(x: i32) -> i32 {
    x * 2
}

fn main() {
    let sonuc = double(add_one(5));
    println!("Sonuç: {}", sonuc); // Çıktı: 12
}
```
