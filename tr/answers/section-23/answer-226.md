## 📘 Bölüm: Jenerikler II  
### 🔹 Kategori: Ömürlü jenerik enumlar  
#### ✅ Cevap 226: Ömürlü jenerik enumlar

Enumlar da jenerik tip ve ömür parametresiyle tanımlanabilir.

```rust
enum BelkiRef<'a, T> {
    Ref(&'a T),
    Deger(T),
}
```

Bu sayede hem referans hem de değer saklanabilir.
