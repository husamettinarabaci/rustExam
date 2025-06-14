## 📘 Bölüm: İleri Düzey Traitler ve Jenerikler  
### 🔹 Kategori: PhantomData  
#### ✅ Cevap 155: Jenerik structlarda PhantomData kullanımı

`PhantomData`, bir struct'ın aslında bir değeri tutmasa bile, tip sistemine o tipe sahip olduğunu belirtmek için kullanılır. Bu, varyans ve drop kontrolleri için önemlidir.

```rust
use std::marker::PhantomData;

struct MyType<T> {
    marker: PhantomData<T>,
}
```
