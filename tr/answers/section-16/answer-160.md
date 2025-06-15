## 📘 Bölüm: Koleksiyonlar: Vektörler  
### 🔹 Kategori: Yapı Vektörü  
#### ✅ Cevap 160: Yapı vektörü

Rust'ta bir yapı vektörü kullanmak için önce bir yapı tanımlayın ve bu yapıdan oluşan bir vektör oluşturun. Daha sonra vektör üzerinde yineleyerek her yapının alanlarına erişebilirsiniz. İşte bir örnek:

```rust
struct Kisi {
    isim: String,
    yas: u8,
}

fn main() {
    let kisiler = vec![
        Kisi { isim: String::from("Ali"), yas: 30 },
        Kisi { isim: String::from("Ayşe"), yas: 25 },
        Kisi { isim: String::from("Mehmet"), yas: 40 },
    ];

    for kisi in &kisiler {
        println!("İsim: {}, Yaş: {}", kisi.isim, kisi.yas);
    }
}
```
