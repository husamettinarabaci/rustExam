## 📚 Bölüm: Modüller ve Görünürlük  
### 🔹 Kategori: Görünürlük  
#### ✅ Cevap 82: `pub` ile görünürlük sağlamak

**Açıklama:**
`pub` anahtar kelimesi, öğeleri modül dışından erişilebilir yapar.

```rust
mod mymod {
    pub struct MyStruct;
    pub fn my_func() {}
}

fn main() {
    let _ = mymod::MyStruct;
    mymod::my_func();
}
```
