## 📘 Bölüm: Yapılar II  
### 🔹 Kategori: Metotlar ve Ömürler  
#### ✅ Cevap 99: Ömürlü metot

Bu örnekte, açık ömür belirtimiyle bir metot nasıl yazılır gösterilmektedir. `MetinTutucu` yapısı bir string dilimi referansı tutar ve `metni_al` metodu aynı ömre sahip bir referans döndürür. Ömür belirtimi, döndürülen referansın yapının ömrü kadar geçerli olmasını garanti eder.

```rust
struct MetinTutucu<'a> {
    metin: &'a str,
}

impl<'a> MetinTutucu<'a> {
    fn metni_al(&self) -> &'a str {
        self.metin
    }
}

fn main() {
    let s = String::from("merhaba");
    let tutucu = MetinTutucu { metin: &s };
    println!("{}", tutucu.metni_al());
}
```
