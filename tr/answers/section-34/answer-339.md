## 📘 Bölüm: Koleksiyonlar ve İteratörler
### 🔹 Kategori: İteratörlerde tembel ve hevesli değerlendirme
#### ✅ Cevap 339: İteratör boru hatlarında tembel ve hevesli değerlendirme

Bu örnekte, iterator adaptörlerinin (ör. `map`, `filter`) tembel (lazy) çalıştığı gösterilmektedir. Zincirleme işlemler, bir tüketici (`collect`, `for`, vb.) çağrılana kadar gerçekleşmez. Kodda, ara işlemler ancak `collect` ile tetiklendiğinde çalışır. Hevesli değerlendirmede ise işlemler hemen uygulanır.

```rust
fn main() {
    let numbers = vec![1, 2, 3, 4, 5];

    let iter = numbers.iter().map(|x| {
        println!("map: {}", x);
        x * 2
    }).filter(|x| {
        println!("filter: {}", x);
        x % 3 == 0
    });

    println!("Henüz hiçbir işlem yapılmadı!");

    let result: Vec<_> = iter.collect();
    println!("Sonuç: {:?}", result);
}
```

Çıktıda, `map` ve `filter` işlemlerinin ancak `collect` çağrıldığında çalıştığı görülür. Bu, tembel değerlendirmedir. Hevesli değerlendirmede ise işlemler hemen uygulanırdı.
