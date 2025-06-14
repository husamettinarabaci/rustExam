## 📘 Bölüm: Kapanışlar ve İteratör Temelleri  
### 🔹 Kategori: Fold ve Reduce  
#### ✅ Cevap 236: `fold` ve `reduce` kullanımı

`fold` ve `reduce`, iteratör elemanlarını birleştirmek için kullanılır.

```rust
let sayilar = [1, 2, 3, 4];
let toplam = sayilar.iter().fold(0, |acc, x| acc + x);
let carpim = sayilar.iter().copied().reduce(|a, b| a * b);
```

`fold` başlangıç değeri alır; `reduce` ise başlangıç değeri olmadan elemanları birleştirir.
