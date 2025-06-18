## 📘 Bölüm: İleri Oyun Geliştirme  
### 🔹 Kategori: Ağ tabanlı çok oyunculu senkronizasyon  
#### ✅ Cevap 773: Ağ tabanlı çok oyunculu senkronizasyon

Bu örnekte, Rust'ın `std::sync::mpsc` kanalları ile temel bir çok oyunculu senkronizasyon simüle edilmiştir. Her oyuncu konumunu günceller ve bu güncellemeyi "sunucuya" gönderir. Sunucu ise gelen güncellemeleri alıp diğer oyunculara iletir. Gerçek bir ağ yerine kanal kullanımı ile mantık gösterilmiştir.

```rust
use std::sync::mpsc;
use std::thread;
use std::time::Duration;

#[derive(Debug, Clone)]
struct PlayerPosition {
    player_id: usize,
    x: f32,
    y: f32,
}

fn main() {
    let (tx, rx) = mpsc::channel();
    let server_tx = tx.clone();

    // Oyuncu simülasyonu
    for id in 0..3 {
        let tx = tx.clone();
        thread::spawn(move || {
            let pos = PlayerPosition { player_id: id, x: id as f32 * 10.0, y: 0.0 };
            tx.send(pos).unwrap();
        });
    }

    // Sunucu simülasyonu
    thread::spawn(move || {
        for received in rx.iter().take(3) {
            println!("Sunucu güncelleme aldı: {:?}", received);
            // Burada diğer oyunculara iletim simüle edilebilir
        }
    });

    thread::sleep(Duration::from_millis(100));
}
```
