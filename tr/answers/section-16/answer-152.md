## 📘 Bölüm: İleri Düzey Traitler ve Jenerikler  
### 🔹 Kategori: İlişkili Tipler  
#### ✅ Cevap 152: Traitlerde ilişkili tiplerin tanımlanması ve kullanımı

Bu örnek, ilişkili tip içeren bir traitin nasıl tanımlanacağını ve bir struct için nasıl uygulanacağını gösterir. İlişkili tip, traitin daha esnek ve tekrar kullanılabilir olmasını sağlar.

```rust
trait Container {
    type Item;
    fn get(&self) -> Self::Item;
}

struct IntBox(i32);

impl Container for IntBox {
    type Item = i32;
    fn get(&self) -> i32 {
        self.0
    }
}
```
