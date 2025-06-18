## 📘 Bölüm: Alan Odaklı Tasarım
### 🔹 Kategori: Kalıcılık için repository entegrasyonu
#### ✅ Cevap 669: Kalıcılık için repository entegrasyonu

Repository'ler, alan varlıklarının depolanmasını ve alınmasını soyutlar. Rust'ta repository trait'leri tanımlayabilir ve farklı depolama arka uçları için implementasyonlar yazabilirsiniz.

```rust
trait KullaniciRepository {
    fn kaydet(&self, kullanici: &Kullanici);
    fn bul(&self, id: u32) -> Option<Kullanici>;
}

struct BellekIciKullaniciRepo {
    kullanicilar: Vec<Kullanici>,
}

impl KullaniciRepository for BellekIciKullaniciRepo {
    fn kaydet(&self, kullanici: &Kullanici) {
        // Kaydetme mantığı (atlandı)
    }
    fn bul(&self, id: u32) -> Option<Kullanici> {
        self.kullanicilar.iter().find(|k| k.id == id).cloned()
    }
}

#[derive(Clone)]
struct Kullanici {
    id: u32,
    isim: String,
}
```
