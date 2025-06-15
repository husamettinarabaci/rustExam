## 📘 Bölüm: Koleksiyonlar: Vektörler  
### 🔹 Kategori: Dilimleme ve İndeksleme  
#### ✅ Cevap 156: Vektörü dilimleme

Rust'ta bir vektörden dilim (slice) oluşturmak için dilim sözdizimi (`&vektor[başlangıç..bitiş]`) kullanılır. Dilimler, koleksiyondaki ardışık elemanlara referans verir. Burada bir vektör oluşturup, bir bölümünden dilim alıp her ikisini de yazdırıyoruz.

```rust
fn main() {
    let sayilar = vec![10, 20, 30, 40, 50];
    let dilim = &sayilar[1..4]; // 1, 2 ve 3. indeksler
    println!("Orijinal vektör: {:?}", sayilar);
    println!("Dilim: {:?}", dilim);
}
```
