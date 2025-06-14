## 📘 Bölüm: Kapanışlar ve İteratör Temelleri  
### 🔹 Kategori: İteratör Tüketme  
#### ✅ Cevap 234: `collect` ile iteratör tüketme

`collect` metodu, bir iteratörü tüketip sonuçları bir koleksiyona toplar.

```rust
let sayilar = [1, 2, 3];
let iki_kat: Vec<_> = sayilar.iter().map(|x| x * 2).collect();
```

`collect` çağrıldıktan sonra iteratör tüketilmiş olur ve tekrar kullanılamaz.
