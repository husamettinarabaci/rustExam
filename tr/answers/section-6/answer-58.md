## 📘 Bölüm: Fonksiyonlar II  
### 🔹 Kategori: Özyinelemeli (Recursive) Fonksiyonlar  
#### ✅ Cevap 58: Özyinelemeli (recursive) fonksiyon

Özyinelemeli fonksiyonlar, problemi çözmek için kendini tekrar çağırır. Burada bir sayının faktöriyelini hesaplayan özyinelemeli bir fonksiyon örneği verilmiştir.

```rust
fn faktoriyel(n: u32) -> u32 {
    if n == 0 { 1 } else { n * faktoriyel(n - 1) }
}

fn main() {
    let sonuc = faktoriyel(5);
    println!("Faktöriyel: {}", sonuc); // Çıktı: Faktöriyel: 120
}
```
