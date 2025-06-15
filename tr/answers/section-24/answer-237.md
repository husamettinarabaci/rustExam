## 📘 Bölüm: Closure ve İteratör Temelleri  
### 🔹 Kategori: `find` ve `position` Kullanımı  
#### ✅ Cevap 237: Rust'ta `find` ve `position` kullanımı

Bu örnekte Rust'ta `find` ve `position` iterator metodlarının nasıl kullanılacağı gösterilmektedir. Program, bir vektörde 3'ten büyük ilk elemanı ve ilk çift sayının indeksini bulur.

```rust
fn main() {
    let sayilar = vec![1, 2, 3, 4, 5];
    let ilk_buyuk_3 = sayilar.iter().find(|&&x| x > 3);
    let ilk_cift_indeks = sayilar.iter().position(|&x| x % 2 == 0);
    println!("İlk 3'ten büyük eleman: {:?}", ilk_buyuk_3);
    println!("İlk çiftin indeksi: {:?}", ilk_cift_indeks);
}
```
