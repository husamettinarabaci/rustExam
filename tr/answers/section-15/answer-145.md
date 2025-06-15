## 📘 Bölüm: Crate'ler ve Harici Paketler  
### 🔹 Kategori: `use crate::` ile İçe Aktarma  
#### ✅ Cevap 145: İçe aktarmalar için `use crate::` kullanımı

Başka bir modülden öğe içe aktarmak için `use crate::` sözdizimi kullanılır. Örnek:

```rust
mod selamlar {
    pub fn merhaba() {
        println!("Modülden merhaba!");
    }
}

use crate::selamlar::merhaba;

fn main() {
    merhaba();
}
```

Bu örnek, modüllerle kodun nasıl düzenleneceğini ve `use crate::` ile fonksiyonun nasıl içe aktarılacağını gösterir.
