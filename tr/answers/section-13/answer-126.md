## 📘 Bölüm: Modüller I  
### 🔹 Kategori: Modül İçe Aktarma  
#### ✅ Cevap 126: Modül içe aktarma

Bir modülden fonksiyonu `use` anahtar kelimesiyle içe aktarabilirsiniz. Aşağıda, `greetings` modülündeki `hello` fonksiyonu içe aktarılmış ve `main` fonksiyonunda doğrudan çağrılmıştır.

```rust
mod greetings {
    pub fn hello() {
        println!("Selamlar, greetings modülünden!");
    }
}

use greetings::hello;

fn main() {
    hello();
}
```
