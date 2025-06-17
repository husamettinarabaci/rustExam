## 📘 Bölüm: Karmaşık Yapılarda Sahiplik  
### 🔹 Kategori: Esnek Sahiplik ve Cow  
#### ✅ Cevap 259: Esnek sahiplik için `Cow` (Copy on Write) kullanma

Bu örnekte, `std::borrow::Cow` kullanılarak hem ödünç alınan (`&str`) hem de sahip olunan (`String`) verilerle çalışan bir fonksiyon gösterilmektedir. Fonksiyon, veriyi büyük harfe çevirirken gerekirse kopyalama yapar.

```rust
use std::borrow::Cow;

fn to_uppercase<'a>(input: Cow<'a, str>) -> Cow<'a, str> {
    if input.chars().all(|c| c.is_uppercase()) {
        input
    } else {
        Cow::Owned(input.to_uppercase())
    }
}

fn main() {
    let borrowed: &str = "rust";
    let owned: String = String::from("Exam");

    let result1 = to_uppercase(Cow::Borrowed(borrowed));
    let result2 = to_uppercase(Cow::Owned(owned));

    println!("{}", result1);
    println!("{}", result2);
}
```
