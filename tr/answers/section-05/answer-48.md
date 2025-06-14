## 📗 Bölüm: Fonksiyonlar I  
### 🔹 Kategori: Eşzamanlılık Primitifleri  
#### ✅ Cevap 48: `Mutex` ve `RwLock` arasındaki fark

**Açıklama:**
`Mutex` aynı anda yalnızca bir thread'in verilere erişmesine izin verir. `RwLock` ise birden fazla thread'in aynı anda okuma, yalnızca bir thread'in yazma yapmasına izin verir.

**Örnek:**
```rust
use std::sync::{Mutex, RwLock};
let m = Mutex::new(5);
let r = RwLock::new(5);
```
Sık okuma, az yazma varsa `RwLock`, tam tersi durumda `Mutex` tercih edilir.
