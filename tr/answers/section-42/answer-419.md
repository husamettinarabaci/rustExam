## 📘 Bölüm: Koleksiyonlar: Vec, HashMap, HashSet
### 🔹 Kategori: Filtreleme için İteratörler ve Koleksiyonları Birleştirme
#### ✅ Cevap 419: Filtreleme için iteratörler ve koleksiyonları birleştirme

Bir vektördeki elemanları filtrelemek için `iter` ve `filter` kullanılabilir. Sonuç `collect` ile yeni bir vektöre toplanır.

```rust
fn main() {
    let v = vec![1, 2, 3, 4, 5, 6];
    let even: Vec<_> = v.iter().filter(|x| **x % 2 == 0).collect();
    println!("Çift sayılar: {:?}", even);
}
```
