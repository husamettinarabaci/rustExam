## 📘 Bölüm: İleri Düzey Traitler ve Jenerikler  
### 🔹 Kategori: Jenerik Structlar  
#### ✅ Cevap 153: Jenerik structlar için metot implementasyonu

Bu örnek, jenerik bir struct tanımlamayı ve içindeki değere referans döndüren bir metot implement etmeyi gösterir.

```rust
struct Wrapper<T> {
    value: T,
}

impl<T> Wrapper<T> {
    fn get_ref(&self) -> &T {
        &self.value
    }
}
```
