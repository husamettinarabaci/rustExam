## 📘 Bölüm: İleri Sahiplik: Grafikler, Döngüler ve İçsel Değiştirilebilirlik  
### 🔹 Kategori: Ref ve RefMut ile Dinamik Ödünç Ömürleri  
#### ✅ Cevap 707: Ref ve RefMut ile dinamik ödünç ömürlerini izleme

`RefCell<T>` ile alınan `Ref` ve `RefMut` ödünçlerinin ömrü, kapsam (scope) ile belirlenir. Bir ödünç kapsamı bitmeden yeni bir ödünç alınamaz. Bu, çalışma zamanında dinamik olarak izlenir.

```rust
use std::cell::RefCell;

fn main() {
    let data = RefCell::new(100);
    {
        let r = data.borrow(); // Ref (değiştirilemez ödünç)
        println!("Okuma: {}", *r);
        // r burada scope bitince bırakılır
    }
    {
        let mut w = data.borrow_mut(); // RefMut (değiştirilebilir ödünç)
        *w += 1;
        println!("Yazma: {}", *w);
    }
}
```

Ödünçlerin kapsamı dışında yeni ödünçler alınabilir. Bu, veri yarışlarını önler.
