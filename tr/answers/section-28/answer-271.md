## 📘 Bölüm: Akıllı İşaretçiler ve İçsel Değiştirilebilirlik  
### 🔹 Kategori: `Box`, `Rc` ve `Arc` arasında seçim yapma  
#### ✅ Cevap 271: `Box`, `Rc` ve `Arc` arasında seçim yapma

Rust'ta `Box`, `Rc` ve `Arc` farklı sahiplik ve paylaşım ihtiyaçları için kullanılır:

- `Box<T>`: Tek sahipli, yığın dışı (heap) veri için kullanılır. Sahiplik devredilebilir, ancak paylaşılmaz.
- `Rc<T>`: Tek iş parçacığında birden fazla sahiplik (referans sayımı) için kullanılır. Thread-safe değildir.
- `Arc<T>`: Çoklu iş parçacığında paylaşım için kullanılır. Atomik referans sayımı ile thread-safe'dir.

Örnekler:

```rust
// Box<T> örneği:
let b = Box::new(5);

// Rc<T> örneği:
use std::rc::Rc;
let r1 = Rc::new(5);
let r2 = Rc::clone(&r1);

// Arc<T> örneği:
use std::sync::Arc;
let a1 = Arc::new(5);
let a2 = Arc::clone(&a1);
```

Kısaca: Tek sahiplik için `Box`, tek iş parçacığında paylaşım için `Rc`, çoklu iş parçacığında paylaşım için `Arc` kullanılır.
