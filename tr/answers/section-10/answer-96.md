## 📚 Bölüm: Trait'ler  
### 🔹 Kategori: Trait Türetme  
#### ✅ Cevap 96: Standart trait'leri türetmek

**Açıklama:**
Yapılar için `Debug`, `Clone`, `PartialEq` gibi standart trait'ler türetilebilir.

```rust
#[derive(Debug, Clone, PartialEq)]
struct Nokta {
    x: i32,
    y: i32,
}

fn main() {
    let n1 = Nokta { x: 1, y: 2 };
    let n2 = n1.clone();
    println!("{:?}", n2);
    println!("Eşit mi? {}", n1 == n2);
}
```
