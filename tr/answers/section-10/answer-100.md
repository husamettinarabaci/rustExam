## 📚 Bölüm: Trait'ler  
### 🔹 Kategori: Operatör Aşırı Yükleme  
#### ✅ Cevap 100: Trait ile operatör aşırı yükleme

**Açıklama:**
Operatörler, ilgili trait'ler implemente edilerek aşırı yüklenebilir.

```rust
use std::ops::Add;

struct Nokta {
    x: i32,
    y: i32,
}

impl Add for Nokta {
    type Output = Nokta;
    fn add(self, diger: Nokta) -> Nokta {
        Nokta { x: self.x + diger.x, y: self.y + diger.y }
    }
}

fn main() {
    let n1 = Nokta { x: 1, y: 2 };
    let n2 = Nokta { x: 3, y: 4 };
    let n3 = n1 + n2;
    println!("{} {}", n3.x, n3.y);
}
```
