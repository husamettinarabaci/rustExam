## 📘 Bölüm: Modüller I  
### 🔹 Kategori: Modül Yeniden Dışa Aktarma  
#### ✅ Cevap 127: Modül yeniden dışa aktarma

Bir modülden fonksiyonu `pub use` ile yeniden dışa aktarabilirsiniz. Böylece dışarıdan doğrudan erişilebilir olur. Aşağıda, `math` modülündeki `add` fonksiyonu yeniden dışa aktarılmış ve `main` fonksiyonunda doğrudan çağrılmıştır.

```rust
mod math {
    pub fn add(a: i32, b: i32) -> i32 {
        a + b
    }
}

pub use math::add;

fn main() {
    let sonuc = add(2, 3);
    println!("Toplam: {}", sonuc);
}
```
