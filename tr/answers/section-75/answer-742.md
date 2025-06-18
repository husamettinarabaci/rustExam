## 📘 Bölüm: Pinning ve Kendine Referanslı Tipler
### 🔹 Kategori: `Pin` ve `PhantomPinned` ile Kendine Referanslı Tip Oluşturma
#### ✅ Cevap 742: `Pin` ve `PhantomPinned` ile kendine referanslı tip oluşturma

`Pin` ve `PhantomPinned` ile, taşınması engellenmiş ve güvenli bir şekilde kendine referanslı struct oluşturabilirsiniz.

```rust
use std::marker::PhantomPinned;
use std::pin::Pin;

struct KendineRef {
    veri: String,
    veri_ref: *const String,
    _pin: PhantomPinned,
}

impl KendineRef {
    fn yeni(veri: String) -> Pin<Box<KendineRef>> {
        let mut s = Box::pin(KendineRef {
            veri,
            veri_ref: std::ptr::null(),
            _pin: PhantomPinned,
        });
        let self_ptr: *const String = &s.veri;
        unsafe {
            let mut_ref = Pin::as_mut(&mut s);
            let mut_ref = Pin::get_unchecked_mut(mut_ref);
            mut_ref.veri_ref = self_ptr;
        }
        s
    }
    fn veri_al(&self) -> &String {
        unsafe { &*self.veri_ref }
    }
}

fn main() {
    let s = KendineRef::yeni(String::from("merhaba"));
    println!("{}", s.veri_al());
}
```
