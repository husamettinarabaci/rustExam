## 📘 Bölüm: Yapılar I  
### 🔹 Kategori: Ömürlü Yapılar  
#### ✅ Cevap 88: Ömürlü yapılar

Bir yapıda referans alanı varsa, ömür parametresi belirtilmelidir. Burada `Message` yapısında `&str` alanı için ömür parametresi eklenmiştir.

```rust
struct Message<'a> {
    content: &'a str,
}

fn main() {
    let text = "Merhaba, Rust!";
    let msg = Message { content: text };
    println!("Mesaj: {}", msg.content);
}
```
