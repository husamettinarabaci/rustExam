## 📘 Bölüm: Traits ve Trait Bound'lar
### 🔹 Kategori: Blanket Implementasyonlar
#### ✅ Cevap 319: Blanket implementasyonlar kullanımı

Bu soruda, bir trait'in blanket implementasyon ile birden fazla tipe otomatik olarak uygulanması isteniyor. `Printable` trait'i, tüm `Display` trait'ini uygulayan tipler için blanket implementasyon ile uygulanır. Böylece, hem `String` hem de `i32` gibi tipler için `print` metodu otomatik olarak kullanılabilir.

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
    let s = String::from("Hello, Rust!");
    let n = 42;
    s.print();
    n.print();
}
```
