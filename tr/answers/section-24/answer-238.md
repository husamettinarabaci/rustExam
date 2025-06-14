## 📘 Bölüm: Kapanışlar ve İteratör Temelleri  
### 🔹 Kategori: Enumerate ve Zip  
#### ✅ Cevap 238: `enumerate` ve `zip` kullanımı

`enumerate` indeks ekler; `zip` iki iteratörü birleştirir.

```rust
let sayilar = [10, 20, 30];
for (i, val) in sayilar.iter().enumerate() {
    println!("{}: {}", i, val);
}

let a = [1, 2];
let b = ["a", "b"];
for (x, y) in a.iter().zip(b.iter()) {
    println!("{} - {}", x, y);
}
```
