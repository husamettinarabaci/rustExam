## 📘 Bölüm: Jenerikler II  
### 🔹 Kategori: Ömürlü jenerik metotlar  
#### ✅ Cevap 227: Ömürlü jenerik metotlar

Metotlar, referansların güvenliğini sağlamak için hem jenerik tip hem de ömür parametresiyle tanımlanabilir.

```rust
struct Tutucu<'a, T> {
    deger: &'a T,
}

impl<'a, T> Tutucu<'a, T> {
    fn referans_al(&self) -> &'a T {
        self.deger
    }
}
```
