## 📘 Bölüm: Pinning ve Kendine Referanslı Tipler
### 🔹 Kategori: Pin Tiplerini Kabul Eden Güvenli API'ler Yazma
#### ✅ Cevap 745: Pin tiplerini kabul eden güvenli API'ler yazma

Pinlenmiş tipler için güvenli bir API yazmak için, taşınmaması gereken metotlarda alıcı olarak `Pin<&mut Self>` kullanılır. Bu, kazara taşımayı önler ve kendine referanslı tipler için güvenlik sağlar.

```rust
use std::marker::PhantomPinned;
use std::pin::Pin;

struct Pinli {
    veri: String,
    _pin: PhantomPinned,
}

impl Pinli {
    fn bir_sey_yap(self: Pin<&mut Self>) {
        println!("Pinli: {}", self.veri);
    }
}

fn main() {
    let mut s = Box::pin(Pinli { veri: String::from("merhaba"), _pin: PhantomPinned });
    Pin::as_mut(&mut s).bir_sey_yap();
}
```
