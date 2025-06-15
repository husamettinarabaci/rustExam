## 📘 Bölüm: Jenerikler I  
### 🔹 Kategori: Jenerik Trait Implementasyonları  
#### ✅ Cevap 216: Jenerik trait implementasyonları

Bir trait'i belirli bir sınırı sağlayan tüm türler için jenerik olarak implement edebilirsiniz. Bu örnekte, `Printable` trait'i, `Display` trait'ini uygulayan tüm türler için implement edilmiştir. Böylece, bu türler `print` metodunu kullanabilir.

```rust
use std::fmt::Display;

trait Printable {
    fn print(&self);
}

impl<T: Display> Printable for T {
    fn print(&self) {
        println!("{}", self);
    }
}

fn main() {
    let x = 42;
    let s = "merhaba";
    x.print();      // i32 Display'i uygular
    s.print();      // &str Display'i uygular
}
```
