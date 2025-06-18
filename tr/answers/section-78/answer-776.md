## 📘 Bölüm: İleri Oyun Geliştirme  
### 🔹 Kategori: Ses işleme ve uzamsal ses  
#### ✅ Cevap 776: Ses işleme ve uzamsal ses

Bu örnekte, bir sinüs dalgası üretilir ve farklı mesafelerdeki ses kaynakları için ses seviyesi simüle edilir.

```rust
use std::f32::consts::PI;

fn main() {
    let freq = 440.0;
    let sample_rate = 44100.0;
    let duration = 1.0;
    let listener_pos = 0.0;
    let sources = [1.0, 5.0, 10.0];
    for &src_pos in &sources {
        let distance = (src_pos - listener_pos).abs();
        let volume = 1.0 / (1.0 + distance);
        println!("Source at {:.1} -> Volume: {:.2}", src_pos, volume);
    }
}
```
