## 📘 Bölüm: Yapılar I  
### 🔹 Kategori: Demet Yapılar ve Birim Benzeri Yapılar  
#### ✅ Cevap 85: Demet yapılar ve birim benzeri yapılar

Rust'ta demet yapılar, tuple gibi davranır ama bir isimleri vardır; birim benzeri yapılar ise alan içermez. Burada her ikisi de tanımlanıp kullanılır.

```rust
struct Color(u8, u8, u8);
struct Marker;

fn main() {
    let siyah = Color(0, 0, 0);
    let isaretci = Marker;
    println!("Renk: {}, {}, {}", siyah.0, siyah.1, siyah.2);
    // isaretci bir değer olarak kullanılabilir, alanı yoktur
}
```
