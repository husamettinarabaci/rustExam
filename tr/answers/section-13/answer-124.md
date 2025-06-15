## 📘 Bölüm: Modüller I  
### 🔹 Kategori: Başka Bir Modülden Öğeye Erişim  
#### ✅ Cevap 124: Başka bir modülden öğeye erişim

Başka bir modülden fonksiyona erişmek için modül yolunu kullanırsınız. Aşağıda, `math` modülünde tanımlı herkese açık `square` fonksiyonu, `main` fonksiyonunda `math::square` ile çağrılmaktadır.

```rust
mod math {
    pub fn square(x: i32) -> i32 {
        x * x
    }
}

fn main() {
    let value = 5;
    let result = math::square(value);
    println!("Karesi: {}", result);
}
```
