## 📘 Bölüm: Koleksiyonlar ve İteratörler  
### 🔹 Kategori: İteratör Adaptörleri ve Zincirleme  
#### ✅ Cevap 334: `map`, `filter`, `take` gibi iteratör adaptörlerini zincirleme

Bu soruda, bir vektör üzerinde iteratör adaptörleri zincirlenerek veri işlenir. `map` ile elemanlar dönüştürülür, `filter` ile istenenler seçilir, `take` ile ise ilk birkaç sonuç alınır. Sonuçlar bir vektöre toplanıp yazdırılır.

```rust
fn main() {
    let numbers = vec![1, 2, 3, 4, 5, 6, 7, 8];
    let result: Vec<i32> = numbers
        .iter()
        .map(|x| x * 2)
        .filter(|x| x % 2 == 0)
        .take(3)
        .cloned()
        .collect();
    println!("Sonuç: {:?}", result);
}
```
