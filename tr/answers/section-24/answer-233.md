## 📘 Bölüm: Closure ve İteratör Temelleri  
### 🔹 Kategori: `iter`, `map` ve `filter` Kullanımı  
#### ✅ Cevap 233: Rust'ta `iter`, `map` ve `filter` kullanımı

Bu örnekte Rust'ta `iter`, `map` ve `filter` iterator metodlarının nasıl kullanılacağı gösterilmektedir. Program bir vektör oluşturur, her elemanın karesini alır, çift kareleri filtreler ve sonuçları yeni bir vektöre toplar.

```rust
fn main() {
    let sayilar = vec![1, 2, 3, 4, 5];
    let cift_kareler: Vec<i32> = sayilar
        .iter()
        .map(|x| x * x)
        .filter(|x| x % 2 == 0)
        .collect();
    println!("Çift kareler: {:?}", cift_kareler);
}
```
