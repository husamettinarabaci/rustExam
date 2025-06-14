## 📘 Bölüm: Kapanışlar ve İteratör Temelleri  
### 🔹 Kategori: Metot Zincirleme  
#### ✅ Cevap 235: İteratör metotlarını zincirleme

Birden fazla iteratör metodu zincirlenerek kısa ve okunabilir kod yazılabilir.

```rust
let sayilar = [1, 2, 3, 4];
let sonuc: Vec<_> = sayilar.iter().map(|x| x + 1).filter(|x| x % 2 == 0).take(2).collect();
```

Zincirleme, okunabilir ve verimli dönüşümler sağlar.
