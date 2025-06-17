## 📘 Bölüm: Koleksiyonlar ve İteratörler
### 🔹 Kategori: Özel İteratörler ve Katlama
#### ✅ Cevap 338: İteratörlerden değer bulma, katlama ve azaltma

Bu örnekte, bir vektör üzerinde `find`, `fold` ve `reduce` iterator metodları kullanılmıştır. `find` belirli bir değeri arar, `fold` tüm elemanları toplar, `reduce` ise maksimum değeri bulur. `reduce` metodu Rust 1.51 ve sonrası için kullanılabilir.

```rust
fn main() {
    let numbers = vec![3, 7, 2, 9, 4];

    // 7 değerini bul
    if let Some(found) = numbers.iter().find(|&&x| x == 7) {
        println!("Bulundu: {}", found);
    } else {
        println!("Değer bulunamadı");
    }

    // Tüm elemanların toplamı
    let sum = numbers.iter().fold(0, |acc, &x| acc + x);
    println!("Toplam: {}", sum);

    // Maksimum değeri bul
    let max = numbers.iter().copied().reduce(|a, b| a.max(b));
    match max {
        Some(m) => println!("Maksimum: {}", m),
        None => println!("Vektör boş"),
    }
}
```
