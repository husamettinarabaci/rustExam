## 📘 Bölüm: Enumlar II  
### 🔹 Kategori: İç içe Enumlarda Eşleme  
#### ✅ Cevap 117: İç içe enumlarda eşleme

Bu örnekte, Rust'ta iç içe enumlarda desen eşleme ile hem dış hem de iç enumdaki değerlere nasıl erişileceği gösterilmektedir. Her iki seviyede de eşleme yaparak derinlemesine veri ayrıştırabilirsiniz.

```rust
enum Ic {
    Deger(i32),
    Yok,
}

enum Dis {
    IcEnum(Ic),
    Diger,
}

fn main() {
    let ic_ice = Dis::IcEnum(Ic::Deger(7));
    match ic_ice {
        Dis::IcEnum(Ic::Deger(x)) => println!("İç değer: {}", x),
        Dis::IcEnum(Ic::Yok) => println!("İç yok"),
        Dis::Diger => println!("Diğer varyant"),
    }
}
```
