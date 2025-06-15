## 📘 Bölüm: Fonksiyonlar II  
### 🔹 Kategori: Closure Parametreli Fonksiyonlar  
#### ✅ Cevap 55: Closure parametreli fonksiyon

Closure'lar, generics ve `Fn` trait'i ile fonksiyonlara parametre olarak geçirilebilir. Burada bir fonksiyon, closure'ı bir değere uygular.

```rust
fn ona_uygula<F>(f: F) -> i32
where
    F: Fn(i32) -> i32,
{
    f(10)
}

fn main() {
    let sonuc = ona_uygula(|x| x * 3);
    println!("Sonuç: {}", sonuc); // Çıktı: Sonuç: 30
}
```
