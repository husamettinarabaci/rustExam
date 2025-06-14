## 📚 Bölüm: Jenerikler  
### 🔹 Kategori: PhantomData  
#### ✅ Cevap 78: PhantomData kullanmak

**Açıklama:**
`PhantomData`, kullanılmayan jenerik tip parametreleri için sahiplik veya varyans bilgisini derleyiciye bildirmek için kullanılır.

```rust
use std::marker::PhantomData;

struct MyType<T> {
    _marker: PhantomData<T>,
}
```
