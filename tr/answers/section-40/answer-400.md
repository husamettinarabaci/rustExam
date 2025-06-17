## 📘 Bölüm: String ve Metinle Çalışma
### 🔹 Kategori: Borçlu veya Sahip String Verisi
#### ✅ Cevap 400: Borçlu veya sahip string verisi için `Cow<str>` kullanımı

`Cow<str>` ile hem borçlu hem de sahip string döndürebilirsiniz. Bu, yalnızca gerekirse tahsisat yapmanızı sağlar.

```rust
use std::borrow::Cow;

fn on_ek_ekle<'a>(s: &'a str) -> Cow<'a, str> {
    if s.starts_with("on_") {
        Cow::Borrowed(s)
    } else {
        Cow::Owned(format!("on_{}", s))
    }
}

fn main() {
    let s1 = "on_merhaba";
    let s2 = "dünya";
    let r1 = on_ek_ekle(s1);
    let r2 = on_ek_ekle(s2);
    println!("{} (borçlu mu: {})", r1, matches!(r1, Cow::Borrowed(_)));
    println!("{} (borçlu mu: {})", r2, matches!(r2, Cow::Borrowed(_)));
}
```
