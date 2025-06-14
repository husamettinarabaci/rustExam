## 📘 Bölüm: Jenerikler II  
### 🔹 Kategori: Ömürlü jenerik yapılar  
#### ✅ Cevap 225: Ömürlü jenerik yapılar

Bir struct, hem jenerik tip hem de ömür parametresiyle tanımlanabilir. Bu, referansların güvenliğini sağlar.

```rust
struct ReferansTutucu<'a, T> {
    referans: &'a T,
}
```

Burada `'a` referansın ömrünü, `T` ise jenerik tipi belirtir.
