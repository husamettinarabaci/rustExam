## 📗 Bölüm: Fonksiyonlar I  
### 🔹 Kategori: Referans Sayımı  
#### ✅ Cevap 47: `Arc` ve `Rc` arasındaki fark

**Açıklama:**
`Rc` (Reference Counted), tek bir thread içinde çoklu sahiplik için kullanılır. `Arc` (Atomic Reference Counted) ise çoklu thread'lerde güvenli paylaşım sağlar.

**Örnek:**
```rust
use std::rc::Rc;
let a = Rc::new(5);
let b = Rc::clone(&a);

use std::sync::Arc;
let x = Arc::new(5);
let y = Arc::clone(&x);
```
Tek thread'de `Rc`, çoklu thread'de ise `Arc` tercih edilmelidir.
