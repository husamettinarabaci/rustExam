## 📘 Bölüm: İleri Trait Tasarımı ve Kullanımı
### 🔹 Kategori: Dış Traitler için Newtype Deseni
#### ✅ Cevap 627: Dış traitler için newtype deseni kullanımı

Newtype deseni, harici trait'leri harici tipler için doğrudan uygulamanın mümkün olmadığı durumlarda, tipi yerel bir struct ile sarmalayarak trait implementasyonu yapmanızı sağlar. Bu, Rust'ın yetim kuralı nedeniyle gereklidir.

```rust
struct BenimString(String);

trait BenimTrait {
    fn bagir(&self);
}

impl BenimTrait for BenimString {
    fn bagir(&self) {
        println!("{}!", self.0.to_uppercase());
    }
}

fn main() {
    let s = BenimString("merhaba".to_string());
    s.bagir();
}
```
