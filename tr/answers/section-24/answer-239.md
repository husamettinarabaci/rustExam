## 📘 Bölüm: Kapanışlar ve İteratör Temelleri  
### 🔹 Kategori: Any ve All  
#### ✅ Cevap 239: `any` ve `all` kullanımı

`any` en az bir eleman koşulu sağlıyorsa true döner; `all` ise tüm elemanlar için kontrol yapar.

```rust
let sayilar = [1, 2, 3, 4];
let cift_var = sayilar.iter().any(|&x| x % 2 == 0);
let hepsi_pozitif = sayilar.iter().all(|&x| x > 0);
```
