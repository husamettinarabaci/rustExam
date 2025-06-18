## 📘 Bölüm: Unsafe Soyutlamalar ve API'ler  
### 🔹 Kategori: Unsafe iç yapılı özel akıllı işaretçiler oluşturma  
#### ✅ Cevap 807: Unsafe iç yapılı özel akıllı işaretçiler oluşturma

Aşağıda, heap üzerinde veri tutan ve Drop ile serbest bırakan basit bir akıllı işaretçi örneği verilmiştir. İç yapısı unsafe, API'si güvenlidir.

```rust
pub struct MyBox<T> {
    ptr: *mut T,
}

impl<T> MyBox<T> {
    pub fn new(val: T) -> Self {
        let b = Box::new(val);
        MyBox { ptr: Box::into_raw(b) }
    }
    pub fn get(&self) -> &T {
        unsafe { &*self.ptr }
    }
}

impl<T> Drop for MyBox<T> {
    fn drop(&mut self) {
        unsafe { Box::from_raw(self.ptr); }
    }
}

fn main() {
    let b = MyBox::new(42);
    println!("{}", b.get());
}
```
