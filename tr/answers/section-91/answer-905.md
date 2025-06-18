## 📘 Bölüm: İleri Paralellik ve SIMD
### 🔹 Kategori: SIMD performans kazançlarını profil etme
#### ✅ Cevap 905: SIMD performans kazançlarını profil etme

Bu çözümde, SIMD toplama (`packed_simd` ile) ve sıradan döngüyle toplama karşılaştırılır. Zaman ölçümü için `std::time::Instant` kullanılır. Büyük dizilerde SIMD, paralel işleme sayesinde genellikle daha hızlıdır.

```rust
use packed_simd::f32x8;
use std::time::Instant;

fn main() {
    let n = 1_000_000;
    let a = vec![1.0f32; n];
    let b = vec![2.0f32; n];
    let mut c = vec![0.0f32; n];

    let start = Instant::now();
    for i in 0..n {
        c[i] = a[i] + b[i];
    }
    let duration_loop = start.elapsed();

    let start = Instant::now();
    for i in (0..n).step_by(8) {
        let va = f32x8::from_slice_unaligned(&a[i..]);
        let vb = f32x8::from_slice_unaligned(&b[i..]);
        let vc = va + vb;
        vc.write_to_slice_unaligned(&mut c[i..]);
    }
    let duration_simd = start.elapsed();

    println!("Döngü: {:?}, SIMD: {:?}", duration_loop, duration_simd);
}
```
