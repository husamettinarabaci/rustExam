## 📚 Bölüm: Trait'ler  
### 🔹 Kategori: Trait'te İlişkili Tipler  
#### ✅ Cevap 97: Trait'te ilişkili tipler kullanmak

**Açıklama:**
İlişkili tipler, trait'lerin uygulayıcılar tarafından belirlenen tipler tanımlamasını sağlar.

```rust
trait Iterator {
    type Item;
    fn next(&mut self) -> Option<Self::Item>;
}

struct Sayac {
    sayi: i32,
}

impl Iterator for Sayac {
    type Item = i32;
    fn next(&mut self) -> Option<i32> {
        self.sayi += 1;
        if self.sayi < 5 {
            Some(self.sayi)
        } else {
            None
        }
    }
}
```
