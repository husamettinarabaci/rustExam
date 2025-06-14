## 📘 Bölüm: İleri Düzey Desenler  
### 🔹 Kategori: Parçalara Ayırma (Destructuring)  
#### ✅ Cevap 161: İç içe struct ve enum'ları parçalara ayırma

Rust'ta iç içe struct ve enum'ları parçalara ayırmak için, veri tiplerinin yapısını yansıtan desenlerle `match` ifadesi kullanılabilir. Örnek:

```rust
enum Durum {
    Aktif(u32),
    Pasif,
}

struct Ic {
    deger: i32,
}

struct Dis {
    ic: Ic,
    durum: Durum,
}

fn detaylari_yazdir(dis: Dis) {
    match dis {
        Dis { ic: Ic { deger }, durum: Durum::Aktif(id) } => {
            println!("Aktif, değer: {}, id: {}", deger, id);
        }
        Dis { ic: Ic { deger }, durum: Durum::Pasif } => {
            println!("Pasif, değer: {}", deger);
        }
    }
}
```

Bu fonksiyon, hem içteki struct'ı (`Ic`) hem de enum'u (`Durum`) tek bir `match` kolunda parçalara ayırmayı göstermektedir.
