## 📘 Bölüm: Karmaşık Yapılarda Sahiplik  
### 🔹 Kategori: Bileşik Yapılarda Güvenli Ödünç Alma  
#### ✅ Cevap 256: Bileşik bir yapının parçalarını güvenli şekilde ödünç alma

Rust'ta bir yapının farklı alanlarını aynı anda ödünç almak mümkündür, çünkü her alan bellekte ayrı yer kaplar. Aşağıdaki örnekte, `Rectangle` yapısının hem `width` hem de `height` alanları aynı anda referans olarak ödünç alınmıştır. Rust, bu tür ödünç almaları güvenli bulur çünkü alanlar çakışmaz.

```rust
struct Rectangle {
    width: u32,
    height: u32,
}

fn borrow_fields(rect: &Rectangle) -> (&u32, &u32) {
    (&rect.width, &rect.height)
}

fn main() {
    let rect = Rectangle { width: 10, height: 20 };
    let (w, h) = borrow_fields(&rect);
    println!("Width: {}, Height: {}", w, h);
}
```
