## 📘 Bölüm: Sistem Seviyesinde Tasarım  
### 🔹 Kategori: Bellek Düzeni ve İnceleme  
#### ✅ Cevap 547: `std::mem::size_of` ile bellek düzenini inceleme

`std::mem::size_of` fonksiyonu ile farklı tiplerin bellek boyutunu öğrenebilirsiniz.

```rust
use std::mem::size_of;

struct MyStruct {
    a: i32,
    b: f64,
}

fn main() {
    println!("i32: {} bytes", size_of::<i32>());
    println!("f64: {} bytes", size_of::<f64>());
    println!("MyStruct: {} bytes", size_of::<MyStruct>());
}
```
