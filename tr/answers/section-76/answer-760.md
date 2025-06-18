## 📘 Bölüm: İleri Eşzamanlılık ve Senkronizasyon
### 🔹 Kategori: Kilitsiz Veri Yapıları
#### ✅ Cevap 760: Çok iş parçacıklı Rust uygulamalarını profil etme

Rust'ta çok iş parçacıklı uygulamaların performansı için `perf`, `flamegraph`, `cargo bench` gibi araçlar kullanılabilir. Ayrıca kod içinde zaman ölçümü yapılabilir.

```rust
use std::thread;
use std::time::Instant;

fn main() {
    let now = Instant::now();
    let mut handles = vec![];
    for _ in 0..4 {
        handles.push(thread::spawn(|| {
            let t0 = Instant::now();
            // İş yükü
            let mut sum = 0;
            for i in 0..1_000_000 { sum += i; }
            println!("Thread süresi: {:?}", t0.elapsed());
        }));
    }
    for h in handles { h.join().unwrap(); }
    println!("Toplam süre: {:?}", now.elapsed());
}
```

Profil sonuçları, darboğazları ve thread başına performansı analiz etmeye yardımcı olur. Dış araçlarla daha detaylı analiz yapılabilir.
