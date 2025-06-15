## 📘 Bölüm: Modüller II  
### 🔹 Kategori: Makro İçe Aktarma  
#### ✅ Cevap 140: Makro içe aktarma

Başka bir modülden makro kullanmak için makroyu `#[macro_export]` ile tanımlamanız ve içe aktarmanız gerekir. Örnek:

```rust
mod makrolar {
    #[macro_export]
    macro_rules! selamla {
        () => {
            println!("Makrodan merhaba!");
        };
    }
}

use crate::selamla;

fn main() {
    selamla!();
}
```

- Makro `makrolar` modülünde `#[macro_export]` ile tanımlanmıştır.
- `#[macro_export]` makroyu crate kökünde erişilebilir yapar.
- Makrolar fonksiyonlardan farklı olarak `use crate::makro_adi;` ile içe aktarılır.
- Daha sonra makro `main` fonksiyonunda kullanılabilir.
