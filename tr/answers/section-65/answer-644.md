## 📘 Bölüm: Performans Optimizasyonu ve Profil
### 🔹 Kategori: Derleyici Bayrakları ile Optimizasyon
#### ✅ Cevap 644: Benchmark için `cargo bench` kullanımı

Rust'ta performans ölçümü için `cargo bench` komutu kullanılır. Bu komut, `#[bench]` özniteliği ile işaretlenmiş fonksiyonları çalıştırır. Nightly Rust gerektirir.

```rust
#![feature(test)]
extern crate test;

#[bench]
fn bench_sum(b: &mut test::Bencher) {
    b.iter(|| (0..1000).sum::<u64>());
}
```

Benchmark sonuçları, fonksiyonun ne kadar sürede çalıştığını gösterir. Sonuçlar karşılaştırılarak kodun performansı optimize edilebilir.
