## 📘 Bölüm: Jenerikler I  
### 🔹 Kategori: impl İçinde Jenerik Metotlar  
#### ✅ Cevap 214: impl içinde jenerik metotlar

Bir struct'ın kendisi jenerik olmasa bile, üzerinde jenerik parametreli metotlar tanımlayabilirsiniz. Bu örnekte, `Printer` adlı struct'ın `print_any` metodu, `T` türü üzerinde jeneriktir ve `Display` trait'ini uygulayan herhangi bir değeri yazdırabilir.

```rust
struct Printer;

impl Printer {
    fn print_any<T: std::fmt::Display>(&self, value: T) {
        println!("{}", value);
    }
}

fn main() {
    let p = Printer;
    p.print_any(123);
    p.print_any("merhaba");
    p.print_any(3.14);
}
```
