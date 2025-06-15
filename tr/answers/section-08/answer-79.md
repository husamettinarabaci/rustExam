## 📘 Bölüm: Ömürler I  
### 🔹 Kategori: Jenerik Yapılarda Ömür  
#### ✅ Cevap 79: Jenerik yapılarda ömür

Bir yapı hem jenerik tip hem de ömür parametresi alabilir. Bu, yapının herhangi bir türdeki referansı tutmasını sağlar. Örnek:

```rust
struct Tutucu<'a, T> {
    deger: &'a T,
}

impl<'a, T> Tutucu<'a, T> {
    fn al(&self) -> &T {
        self.deger
    }
}

fn main() {
    let sayi = 42;
    let tutucu = Tutucu { deger: &sayi };
    println!("Tutulan değer: {}", tutucu.al());
}
```
