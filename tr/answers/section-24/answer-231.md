## 📘 Bölüm: Closure ve İteratör Temelleri  
### 🔹 Kategori: Closure Tanımlama ve Çağırma  
#### ✅ Cevap 231: Rust'ta closure tanımlama ve çağırma

Bu örnekte iki tamsayıyı toplayan bir closure'ın nasıl tanımlanıp çağrılacağı gösterilmektedir. Closure'lar, Rust'ta çevrelerindeki değişkenleri yakalayabilen anonim fonksiyonlardır.

```rust
fn main() {
    let topla = |a: i32, b: i32| a + b;
    let sonuc = topla(5, 7);
    println!("Toplam: {}", sonuc);
}
```
