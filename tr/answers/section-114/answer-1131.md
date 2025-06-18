## 📘 Bölüm: Senkronizasyon Primitifleri Derinlemesine
### 🔹 Kategori: Özel senkronizasyon primitifleri oluşturma
#### ✅ Cevap 1131: Özel senkronizasyon primitifleri oluşturma

Rust'ta özel bir senkronizasyon primitifini, örneğin basit bir spinlock'u, atomik değişkenlerle oluşturabilirsiniz. Bu tür primitifler, düşük seviyeli kontrol ve öğrenme amaçlıdır.

```rust
use std::sync::atomic::{AtomicBool, Ordering};
use std::cell::UnsafeCell;

pub struct SpinLock<T> {
    lock: AtomicBool,
    data: UnsafeCell<T>,
}

unsafe impl<T: Send> Sync for SpinLock<T> {}

impl<T> SpinLock<T> {
    pub fn new(data: T) -> Self {
        Self { lock: AtomicBool::new(false), data: UnsafeCell::new(data) }
    }
    pub fn lock(&self) -> &mut T {
        while self.lock.swap(true, Ordering::Acquire) {}
        unsafe { &mut *self.data.get() }
    }
    pub fn unlock(&self) {
        self.lock.store(false, Ordering::Release);
    }
}
```
Bu örnekte, `SpinLock` ile kendi kilidinizi tanımlayabilirsiniz.
