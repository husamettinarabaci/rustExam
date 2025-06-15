## 📘 Bölüm: Modüller II  
### 🔹 Kategori: Birden Fazla Öğeyi İçe Aktarma  
#### ✅ Cevap 138: Birden fazla öğe içe aktarma

Rust'ta bir modülden birden fazla öğeyi tek bir `use` ifadesiyle içe aktarabilirsiniz. Ayrıca, içe aktarılan öğelerden birine yeni bir isim de verebilirsiniz. Örnek:

```rust
mod matematik {
    pub fn topla(a: i32, b: i32) -> i32 {
        a + b
    }
    pub fn cikar(a: i32, b: i32) -> i32 {
        a - b
    }
}

use matematik::{topla, cikar as fark};

fn main() {
    println!("3 + 2 = {}", topla(3, 2));
    println!("3 - 2 = {}", fark(3, 2));
}
```

- `topla` ve `cikar` fonksiyonları `matematik` modülünden içe aktarılmıştır.
- `cikar` fonksiyonu `fark` olarak yeniden adlandırılmıştır.
- Her iki fonksiyon da `main` fonksiyonunda doğrudan çağrılabilir.
