## 📘 Bölüm: Karmaşık Yapılarda Sahiplik  
### 🔹 Kategori: İç içe Tiplerde Sahiplik ve Ödünç Alma  
#### ✅ Cevap 251: Sahiplikli ve ödünç alan alanlara sahip iç içe yapılar oluşturma

Bu örnekte, bazı alanları sahiplikli, bazıları ise ödünç alınan (referans) olan iç içe struct'ların nasıl tanımlanacağı gösterilmektedir. Ödünç alınan alanlar için ömür (lifetime) anotasyonu gereklidir. Rust'ın sahiplik ve ömür sistemi, ödünç alınan verinin sahibi yaşamdan çıkmadan referansın geçersiz olmasını engeller.

```rust
struct Sahip {
    isim: String,
    yas: u32,
}

struct Evcil<'a> {
    isim: String,
    sahip: &'a Sahip, // ömürlü ödünç alan alan
}

fn main() {
    let sahip = Sahip {
        isim: String::from("Ayşe"),
        yas: 30,
    };
    let evcil = Evcil {
        isim: String::from("Pamuk"),
        sahip: &sahip,
    };
    println!("Evcil: {} (Sahip: {} - Yaş: {})", evcil.isim, evcil.sahip.isim, evcil.sahip.yas);
}
```
