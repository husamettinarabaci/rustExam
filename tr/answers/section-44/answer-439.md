## 📘 Bölüm: Akıllı İşaretçiler ve Kaynak Yönetimi  
### 🔹 Kategori: Özel akıllı işaretçi sarmalayıcıları oluşturma  
#### ✅ Cevap 439: Özel akıllı işaretçi sarmalayıcıları oluşturma

Kendi akıllı işaretçi tipinizi tanımlayabilir, `Deref` ve `Drop` traitlerini uygulayarak davranışını özelleştirebilirsiniz.

```rust
use std::ops::Deref;

struct MyBox<T>(T);

impl<T> Deref for MyBox<T> {
    type Target = T;
    fn deref(&self) -> &Self::Target {
        &self.0
    }
}

impl<T> Drop for MyBox<T> {
    fn drop(&mut self) {
        println!("MyBox bırakıldı!");
    }
}
```
