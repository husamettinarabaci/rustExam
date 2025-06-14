## 📘 Bölüm: Jenerikler II  
### 🔹 Kategori: Jenerik sabit parametreler  
#### ✅ Cevap 230: Jenerik sabit parametreler

Sabit jenerikler, tipleri sabit değerlerle parametreleştirmenizi sağlar.

```rust
struct DiziSarmalayıcı<T, const N: usize> {
    veri: [T; N],
}

let arr = DiziSarmalayıcı::<i32, 4> { veri: [1, 2, 3, 4] };
```

Bu sayede tipler sadece türle değil, değerle de jenerik olabilir.
