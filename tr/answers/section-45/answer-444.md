## 📘 Bölüm: Ömürler ve Ödünç Alma Pratiği  
### 🔹 Kategori: Referans Döndüren Fonksiyonlar  
#### ✅ Cevap 444: Referans döndüren fonksiyonlar yazma

Bir fonksiyon parametre olarak aldığı referanslardan birini döndürüyorsa, ömür belirtimi gerekir. Aşağıda bu duruma örnek bir fonksiyon gösterilmiştir.

```rust
fn en_buyuk<'a>(a: &'a i32, b: &'a i32) -> &'a i32 {
    if a > b { a } else { b }
}

fn main() {
    let x = 10;
    let y = 20;
    let sonuc = en_buyuk(&x, &y);
    println!("En büyük: {}", sonuc);
}
```
