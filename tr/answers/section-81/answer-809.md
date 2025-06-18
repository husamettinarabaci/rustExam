## 📘 Bölüm: Unsafe Soyutlamalar ve API'ler  
### 🔹 Kategori: İçsel değiştirilebilirlik için `UnsafeCell` kullanımı  
#### ✅ Cevap 809: İçsel değiştirilebilirlik için `UnsafeCell` kullanımı

Aşağıda, `UnsafeCell` ile içsel değiştirilebilirlik sağlayan basit bir sayaç örneği verilmiştir. API güvenlidir.

```rust
use std::cell::UnsafeCell;

pub struct MyCounter {
    value: UnsafeCell<i32>,
}

impl MyCounter {
    pub fn new(val: i32) -> Self {
        Self { value: UnsafeCell::new(val) }
    }
    pub fn increment(&self) {
        unsafe { *self.value.get() += 1; }
    }
    pub fn get(&self) -> i32 {
        unsafe { *self.value.get() }
    }
}

fn main() {
    let counter = MyCounter::new(0);
    counter.increment();
    println!("{}", counter.get());
}
```

Not: `MyCounter` thread-safe değildir, sadece tek iş parçacığında kullanılmalıdır.
