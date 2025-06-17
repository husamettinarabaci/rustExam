## 📘 Bölüm: Modüller II  
### 🔹 Kategori: Makro İçe Aktarma  
#### ✅ Cevap 140: Makro içe aktarma

Başka bir modülde `#[macro_export]` ile tanımlanan bir makro, crate köküne dışa aktarılır ve doğrudan çağrılabilir. Tekrar `use crate::makro_adi;` ile içe aktarmak derleme hatasına yol açar. Doğru kullanım aşağıdaki gibidir:

```rust
mod makrolar {
    #[macro_export]
    macro_rules! selamla {
        () => {
            println!("Makrodan merhaba!");
        };
    }
}

fn main() {
    selamla!();
}
```

- Makro `makrolar` modülünde `#[macro_export]` ile tanımlanır ve crate köküne dışa aktarılır.
- `use crate::selamla;` satırı eklenirse derleyici "the name `selamla` is defined multiple times" hatası verir.
- Doğru kullanımda makro doğrudan çağrılır: `selamla!();`.
- Makrolar fonksiyonlardan farklı olarak dışa aktarıldığında crate kökünden otomatik olarak erişilebilir.
