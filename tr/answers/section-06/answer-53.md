## 📘 Bölüm: Fonksiyonlar II  
### 🔹 Kategori: Closure'lar  
#### ✅ Cevap 53: Closure'lara giriş

Rust'ta closure'lar, değişkenlere atanabilen anonim fonksiyonlardır. Burada iki sayıyı toplayan bir closure tanımlanıp `main` fonksiyonunda çağrılıyor.

```rust
fn main() {
    let toplam = |a: i32, b: i32| a + b; // Closure tanımı
    let sonuc = toplam(5, 7);
    println!("Toplam: {}", sonuc); // Çıktı: Toplam: 12
}
```
