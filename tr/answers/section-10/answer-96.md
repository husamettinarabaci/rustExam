## 📘 Bölüm: Yapılar II  
### 🔹 Kategori: Kendi kendini döndüren metot  
#### ✅ Cevap 96: Kendi kendini döndüren metot

Bir metot, kendi türünden yeni bir örnek döndürmek için `Self` kullanabilir. Burada, `Multiplier` adında bir yapı ve ona ait `double` metodu ile yeni bir örnek oluşturulmaktadır.

```rust
struct Multiplier {
    value: i32,
}

impl Multiplier {
    fn double(&self) -> Self {
        Self { value: self.value * 2 }
    }
}

fn main() {
    let m = Multiplier { value: 5 };
    let doubled = m.double();
    println!("Orijinal: {}, İki katı: {}", m.value, doubled.value);
}
```
