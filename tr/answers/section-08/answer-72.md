## 📚 Bölüm: Jenerikler  
### 🔹 Kategori: Jenerik Yapılar  
#### ✅ Cevap 72: Jenerik yapı tanımlamak

**Açıklama:**
Jenerik yapılar, istenilen türde değer tutabilir ve örneklenirken tür belirtilir.

```rust
struct Container<T> {
    value: T,
}

fn main() {
    let tamsayi = Container { value: 5 };
    let yazi = Container { value: "merhaba" };
}
```
