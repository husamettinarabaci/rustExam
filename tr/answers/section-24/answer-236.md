## 📘 Bölüm: Closure ve İteratör Temelleri  
### 🔹 Kategori: `fold` ve `reduce` Kullanımı  
#### ✅ Cevap 236: Rust'ta `fold` ve `reduce` kullanımı

Bu örnekte Rust'ta `fold` ve `reduce` iterator metodlarının nasıl kullanılacağı gösterilmektedir. Program, bir vektördeki elemanların toplamını ve çarpımını bu metodlarla hesaplar.

```rust
fn main() {
    let sayilar = vec![1, 2, 3, 4, 5];
    let toplam = sayilar.iter().fold(0, |acc, x| acc + x);
    let carpim = sayilar.iter().copied().reduce(|acc, x| acc * x).unwrap_or(1);
    println!("Toplam: {}", toplam);
    println!("Çarpım: {}", carpim);
}
```
