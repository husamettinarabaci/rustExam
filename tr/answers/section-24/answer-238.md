## 📘 Bölüm: Closure ve İteratör Temelleri  
### 🔹 Kategori: `enumerate` ve `zip` kullanımı  
#### ✅ Cevap 238: İteratörlerde `enumerate` ve `zip` kullanımı

Bu çözümde, iteratörler üzerinde `enumerate` ve `zip` metotlarının nasıl kullanılacağı gösterilmektedir. `zip` iki iteratörü çiftler halinde birleştirir, `enumerate` ise her çifte bir indeks ekler.

```rust
fn main() {
    let a = vec![10, 20, 30];
    let b = vec![1, 2, 3];

    for (i, (x, y)) in a.iter().zip(b.iter()).enumerate() {
        println!("Indeks: {}, Çift: ({}, {})", i, x, y);
    }
}
```
