## 📘 Bölüm: İleri Düzey Desenler  
### 🔹 Kategori: Parçalara Ayırma (Destructuring)  
#### ✅ Cevap 161: İç içe struct ve enum'ları parçalara ayırma (destructuring)

Rust'ta iç içe struct ve enum'ları parçalara ayırmak için desen eşleme kullanılır. İşte bir örnek:

```rust
enum Durum {
    Aktif,
    Pasif,
}

struct Kullanici {
    isim: String,
    durum: Durum,
}

fn main() {
    let kullanici = Kullanici {
        isim: String::from("Ali"),
        durum: Durum::Aktif,
    };

    match kullanici {
        Kullanici { isim, durum: Durum::Aktif } => {
            println!("{} aktif", isim);
        }
        Kullanici { isim, durum: Durum::Pasif } => {
            println!("{} pasif", isim);
        }
    }
}
```

Bu örnekte, `Kullanici` adında bir struct ve `Durum` adında bir enum tanımlanmıştır. `Kullanici` struct'ı içinde bir `isim` alanı ve bir `durum` alanı bulunmaktadır. `Durum` enum'u ise kullanıcının aktif ya da pasif olduğunu belirtmektedir. `match` ifadesi kullanılarak, `Kullanici` örneği içindeki `durum` alanına göre farklı işlemler yapılmaktadır.
