## 📘 Bölüm: Profil ve Performans Ayarı  
### 🔹 Kategori: Başlatma Süresi Optimizasyonu  
#### ✅ Cevap 975: Rust uygulamalarında başlatma süresini optimize etme

Başlatma süresini azaltmak için bağımlılıkları azaltmak ve tembel yükleme (lazy initialization) kullanmak etkilidir. Aşağıda, büyük bir vektörün sadece ihtiyaç duyulduğunda başlatıldığı bir örnek verilmiştir.

```rust
use std::sync::OnceLock;

static DATA: OnceLock<Vec<u8>> = OnceLock::new();

fn get_data() -> &'static Vec<u8> {
    DATA.get_or_init(|| {
        // Büyük veri sadece ilk çağrıda yüklenir
        (0..10_000_000).map(|x| (x % 256) as u8).collect()
    })
}

fn main() {
    println!("Program başlatıldı");
    // get_data() sadece ihtiyaç olursa çağrılır
}
```

Başlatma süresini ölçmek için:
```
time ./target/release/<program_adı>
```
Tembel yükleme ile başlatma süresi kısalır.
