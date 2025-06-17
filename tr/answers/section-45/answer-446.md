## 📘 Bölüm: Ömürler ve Ödünç Alma Pratiği  
### 🔹 Kategori: Statik Ömür ve Kullanım Alanları  
#### ✅ Cevap 446: Statik ömür ve kullanım alanları

`'static` ömrü, programın tüm ömrü boyunca geçerli olan veri anlamına gelir. Genellikle sabitler ve string literal'ler `'static` ömre sahiptir.

```rust
static MESAJ: &str = "Bu bir sabittir.";

fn main() {
    let s: &'static str = MESAJ;
    println!("{}", s);
}
```
