## 📘 Bölüm: Traitler I  
### 🔹 Kategori: Harici Türler için Trait Implementasyonu  
#### ✅ Cevap 205: Harici türler için trait implementasyonu

Rust'ta kendi trait'inizi, dışarıdan gelen (örneğin standart kütüphane) bir tür için uygulayabilirsiniz; ancak harici trait'leri harici türlere uygulayamazsınız. Burada, `Printable` adında bir trait'i `i32` türü için uyguluyoruz.

```rust
trait Printable {
    fn print_value(&self);
}

impl Printable for i32 {
    fn print_value(&self) {
        println!("Değer: {}", self);
    }
}

fn main() {
    let x: i32 = 42;
    x.print_value();
}
```
