## 📘 Bölüm: Ömürler I  
### 🔹 Kategori: Yapılar ve Ömürler  
#### ✅ Cevap 74: Ömür parametreli yapılar

Bir yapıda referans alanı varsa, bu referansın yapının ömrü boyunca geçerli olmasını sağlamak için ömür parametresi belirtilmelidir. Burada `TextHolder` yapısı bir string dilimi referansı tutar ve `'a` ömrü bu referansın geçerliliğini garanti eder.

```rust
struct TextHolder<'a> {
    text: &'a str,
}

fn main() {
    let s = String::from("Merhaba, ömür!");
    let holder = TextHolder { text: &s };
    println!("{}", holder.text);
}
```
