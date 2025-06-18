## 📘 Bölüm: Derleme Zamanı Programlama Desenleri  
### 🔹 Kategori: Derleme Zamanı Kod ve Makroları Hata Ayıklama  
#### ✅ Cevap 1330: Derleme zamanı kod ve makroları hata ayıklama

Makro çıktısını incelemek için `cargo expand` aracı kullanılabilir. Ayrıca, makro içinde `println!` veya `dbg!` ile derleme zamanı kodu gözlemlenebilir.

```rust
macro_rules! debug_macro {
    ($val:expr) => {{
        println!("Makroya verilen ifade: {}", stringify!($val));
        $val
    }};
}

fn main() {
    let x = debug_macro!(2 + 3);
    println!("Sonuç: {}", x);
}
```
Makro çıktısını görmek için terminalde `cargo expand` komutu kullanılabilir. Bu, makronun genişletilmiş halini gösterir.
