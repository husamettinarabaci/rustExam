## 📘 Bölüm: Enumlar I  
### 🔹 Kategori: Option Enum Kullanımı  
#### ✅ Cevap 106: Option enum kullanımı

Rust'ta `Option` enum'u, bir değerin var olup olmadığını göstermek için kullanılır. `Some` değerin varlığını, `None` ise yokluğunu belirtir. Bu örnekte, bir sayının çift olup olmadığını göstermek için `Option<i32>` kullanıyoruz.

```rust
fn cift_kontrol(sayi: i32) -> Option<i32> {
    if sayi % 2 == 0 {
        Some(sayi)
    } else {
        None
    }
}

fn main() {
    let num = 7;
    match cift_kontrol(num) {
        Some(n) => println!("{} çift!", n),
        None => println!("{} tek!", num),
    }
}
```
