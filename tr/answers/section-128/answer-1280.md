## 📘 Bölüm: Derleme Zamanı Motorları ve Metaprogramlama
### 🔹 Kategori: Tip Güvenli Gömülü DSL'ler
#### ✅ Cevap 1280: Tip güvenli gömülü DSL'ler tasarlama

Trait ve jenerikler tip güvenli DSL'ler oluşturmak için kullanılabilir. Örnek:

```rust
trait Ifade {
    fn deger(&self) -> i32;
}

struct Lit(i32);
impl Ifade for Lit {
    fn deger(&self) -> i32 { self.0 }
}

struct Topla<A: Ifade, B: Ifade>(A, B);
impl<A: Ifade, B: Ifade> Ifade for Topla<A, B> {
    fn deger(&self) -> i32 { self.0.deger() + self.1.deger() }
}

fn main() {
    let ifade = Topla(Lit(2), Lit(3));
    println!("{}", ifade.deger());
}
```

Tip sistemi yalnızca geçerli ifadelerin oluşturulmasını sağlar.
