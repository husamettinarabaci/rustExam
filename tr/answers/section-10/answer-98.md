## 📘 Bölüm: Yapılar II  
### 🔹 Kategori: Metotlar ve Trait Sınırları  
#### ✅ Cevap 98: Trait sınırı olan metot

Bu örnekte, bir metot implementasyonunda trait sınırı nasıl kullanılır gösterilmektedir. `print_value` metodu yalnızca `Display` trait'ini uygulayan türler için kullanılabilir, böylece sadece yazdırılabilir türlerle çalışır.

```rust
use std::fmt::Display;

struct Kapsayici<T> {
    deger: T,
}

impl<T: Display> Kapsayici<T> {
    fn degeri_yazdir(&self) {
        println!("Değer: {}", self.deger);
    }
}

fn main() {
    let k = Kapsayici { deger: 42 };
    k.degeri_yazdir(); // i32 Display trait'ini uyguladığı için çalışır
}
```
