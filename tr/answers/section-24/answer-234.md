## 📘 Bölüm: Closure ve İteratör Temelleri  
### 🔹 Kategori: İteratörleri `collect` ile Tüketme  
#### ✅ Cevap 234: Rust'ta iteratörleri `collect` ile tüketme

Bu örnekte bir iteratörün `collect` metodu ile nasıl tüketileceği gösterilmektedir. Program, orijinal vektördeki her elemanı 1 artırır ve sonuçları yeni bir vektöre toplar.

```rust
fn main() {
    let sayilar = vec![1, 2, 3, 4, 5];
    let arttirilmis: Vec<i32> = sayilar.iter().map(|x| x + 1).collect();
    println!("Artırılmış: {:?}", arttirilmis);
}
```
