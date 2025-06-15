## 📘 Bölüm: Yapılar I  
### 🔹 Kategori: Referans İçeren Yapılar  
#### ✅ Cevap 87: Referans içeren yapılar

Bir yapıda referans alanı kullanmak için ömür belirtmek gerekir (veya 'static kullanılır). Burada `Car` yapısında `&str` alanı için ömür parametresi eklenmiştir.

```rust
struct Car<'a> {
    brand: &'a str,
    year: u16,
}

fn main() {
    let car = Car {
        brand: "Toyota",
        year: 2020,
    };
    println!("Marka: {}", car.brand);
    println!("Yıl: {}", car.year);
}
```
