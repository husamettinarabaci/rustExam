## 📘 Bölüm: Ömürler ve Ödünç Alma Semantiği  
### 🔹 Kategori: Yapı Tanımlarında Ömürler  
#### ✅ Cevap 263: Yapı tanımlarında ömür kullanımı

Rust'ta bir yapının alanı referans içeriyorsa, yapının ömrü bu referansın ömründen uzun olamaz. Bu nedenle yapı tanımında ömür parametresi kullanılır. Aşağıdaki örnekte, `Message` yapısı bir string referansı içerdiği için `'a` ömrü ile tanımlanmıştır.

```rust
struct Message<'a> {
    content: &'a str,
}

fn main() {
    let text = String::from("Merhaba, Rust!");
    let msg = Message { content: &text };
    println!("İleti: {}", msg.content);
}
```

Bu örnekte, `msg` değişkeninin ömrü, `text` değişkeninin ömrünü aşamaz. Böylece Rust, geçersiz referansları önler.
