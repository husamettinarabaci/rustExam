## 📚 Bölüm: Jenerikler  
### 🔹 Kategori: Çoklu Tip Parametreleri  
#### ✅ Cevap 75: Çoklu tip parametreleri kullanmak

**Açıklama:**
Birden fazla tip parametresi ile farklı türde değerler tutulabilir.

```rust
struct Pair<T, U> {
    first: T,
    second: U,
}

fn main() {
    let cift = Pair { first: 1, second: "iki" };
}
```
