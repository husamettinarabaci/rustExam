## 📘 Bölüm: Closure ve İteratör Temelleri  
### 🔹 Kategori: Closure'ları Fonksiyonlara Parametre Olarak Geçirme  
#### ✅ Cevap 232: Rust'ta closure'ları fonksiyonlara parametre olarak geçirme

Bu örnekte closure'ın bir fonksiyona parametre olarak nasıl geçirileceği gösterilmektedir. `uygula` fonksiyonu bir closure ve iki tamsayı alır, closure'ı bu değerlerle çağırır.

```rust
fn uygula<F>(f: F, x: i32, y: i32) -> i32
where
    F: Fn(i32, i32) -> i32,
{
    f(x, y)
}

fn main() {
    let carp = |a, b| a * b;
    let sonuc = uygula(carp, 4, 5);
    println!("Çarpım: {}", sonuc);
}
```
