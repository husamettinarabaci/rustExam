## 📘 Bölüm: Alan Odaklı Tasarım
### 🔹 Kategori: CQRS (Komut ve Sorgu Sorumluluk Ayrımı) uygulama
#### ✅ Cevap 666: CQRS (Komut ve Sorgu Sorumluluk Ayrımı) uygulama

CQRS, komutları (durumu değiştiren işlemler) ve sorguları (salt-okuma işlemleri) ayırır. Rust'ta farklı metotlar veya trait'ler ile bu ayrımı uygulayabilirsiniz.

```rust
struct BankaHesabi {
    bakiye: i32,
}

impl BankaHesabi {
    // Komut
    fn yatir(&mut self, miktar: i32) {
        self.bakiye += miktar;
    }
    // Sorgu
    fn bakiye(&self) -> i32 {
        self.bakiye
    }
}

fn main() {
    let mut h = BankaHesabi { bakiye: 0 };
    h.yatir(50);
    println!("Bakiye: {}", h.bakiye());
}
```
