## 📚 Bölüm: Jenerikler  
### 🔹 Kategori: İlişkili Tipler  
#### ✅ Cevap 77: Trait'lerde ilişkili tipler kullanmak

**Açıklama:**
İlişkili tipler, trait'lerin uygulayıcılar tarafından belirlenen tipler tanımlamasını sağlar.

```rust
trait Summable {
    type Item;
    fn sum(&self) -> Self::Item;
}

struct MyVec(Vec<i32>);

impl Summable for MyVec {
    type Item = i32;
    fn sum(&self) -> i32 {
        self.0.iter().sum()
    }
}
```
