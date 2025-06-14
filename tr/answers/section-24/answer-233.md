## 📘 Bölüm: Kapanışlar ve İteratör Temelleri  
### 🔹 Kategori: İteratör Metotları  
#### ✅ Cevap 233: `iter`, `map` ve `filter` kullanımı

İteratör metotları zincirlenerek koleksiyonlar işlenebilir.

```rust
let sayilar = [1, 2, 3, 4, 5];
let ciftler: Vec<_> = sayilar.iter().map(|x| x * 2).filter(|x| x % 4 == 0).collect();
```
