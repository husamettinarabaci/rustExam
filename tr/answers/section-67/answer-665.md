## 📘 Bölüm: Alan Odaklı Tasarım
### 🔹 Kategori: Özel alanlarla kuralları kapsülleme
#### ✅ Cevap 665: Özel alanlarla kuralları kapsülleme

Kuralları kapsüllemek için struct alanlarını private (özel) yapıp, kontrollü erişim için public metotlar tanımlayabilirsiniz. Böylece doğrudan erişim engellenir ve kurallar metotlar aracılığıyla uygulanır.

```rust
pub struct Hesap {
    bakiye: i32, // özel
}

impl Hesap {
    pub fn yeni() -> Self {
        Hesap { bakiye: 0 }
    }
    pub fn yatir(&mut self, miktar: i32) {
        if miktar > 0 {
            self.bakiye += miktar;
        }
    }
    pub fn bakiye(&self) -> i32 {
        self.bakiye
    }
}

fn main() {
    let mut h = Hesap::yeni();
    h.yatir(100);
    println!("Bakiye: {}", h.bakiye());
}
```
