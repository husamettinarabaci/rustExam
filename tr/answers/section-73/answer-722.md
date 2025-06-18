## 📘 Bölüm: İleri Trait Sistemi ve Uyum  
### 🔹 Kategori: Yetim kuralı ve uyum kısıtlarını anlama  
#### ✅ Cevap 722: Yetim kuralı ve uyum kısıtlarını anlama

Rust'ta yetim kuralı (orphan rule), bir trait implementasyonunun yalnızca trait veya tipten en az biri sizin crate'inizde tanımlıysa yapılabileceğini belirtir.

```rust
// std::fmt::Display trait'i ve Vec tipi ikisi de dış crate'den geldiği için aşağıdaki implementasyon derlenmez:
// impl std::fmt::Display for Vec<i32> {
//     fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
//         write!(f, "Vec: {:?}", self)
//     }
// }
// Hata: trait ve tip ikisi de dışarıdan, yetim kuralı ihlali.

// Çözüm: Ya trait ya da tip size ait olmalı. Örneğin kendi trait'inizi uygulayabilirsiniz:
trait MyDisplay {
    fn my_display(&self) -> String;
}

impl MyDisplay for Vec<i32> {
    fn my_display(&self) -> String {
        format!("Vec: {:?}", self)
    }
}

fn main() {
    let v = vec![1, 2, 3];
    println!("{}", v.my_display());
}
```

Yetim kuralı, trait uyumunu ve derleyici güvenliğini sağlar.
