## 📘 Bölüm: Kapanışlar ve İteratör Temelleri  
### 🔹 Kategori: Bulma ve Konum  
#### ✅ Cevap 237: `find` ve `position` kullanımı

`find` ilk eşleşen elemanı döndürür; `position` ise indeksini döndürür.

```rust
let sayilar = [1, 2, 3, 4];
let bulunan = sayilar.iter().find(|&&x| x == 3);
let konum = sayilar.iter().position(|&x| x == 3);
```
