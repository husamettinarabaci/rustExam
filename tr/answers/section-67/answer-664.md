## 📘 Bölüm: Alan Odaklı Tasarım
### 🔹 Kategori: Alan olayları ve event sourcing tasarımı
#### ✅ Cevap 664: Alan olayları ve event sourcing tasarımı

Alan olayları, alanınızda meydana gelen önemli olayları temsil eder. Rust'ta olaylar enum veya struct ile modellenebilir ve event sourcing için olay geçmişi bir koleksiyonda tutulabilir.

```rust
#[derive(Debug)]
enum AlanOlayi {
    KullaniciOlusturuldu { kullanici_id: u32 },
    EpostaDegisti { kullanici_id: u32, yeni_eposta: String },
}

fn main() {
    let olaylar = vec![
        AlanOlayi::KullaniciOlusturuldu { kullanici_id: 1 },
        AlanOlayi::EpostaDegisti { kullanici_id: 1, yeni_eposta: "yeni@example.com".to_string() },
    ];
    for olay in olaylar {
        println!("{:?}", olay);
    }
}
```
