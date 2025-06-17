## 📘 Bölüm: Akıllı İşaretçiler ve Kaynak Yönetimi  
### 🔹 Kategori: Referans sayımlı sahiplik için Rc<T> kullanımı  
#### ✅ Cevap 432: Referans sayımlı sahiplik için Rc<T> kullanımı

`Rc<T>`, birden fazla sahipliğe izin verir ve referans sayısını otomatik olarak yönetir. Genellikle tek iş parçacıklı ortamlarda kullanılır.

```rust
use std::rc::Rc;

fn main() {
    let data = Rc::new(5);
    let a = Rc::clone(&data);
    let b = Rc::clone(&data);
    println!("Referans sayısı: {}", Rc::strong_count(&data));
}
```
