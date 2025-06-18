## 📘 Bölüm: Profil ve Performans Ayarı  
### 🔹 Kategori: Otomatik Performans Regresyon Testi  
#### ✅ Cevap 980: Otomatik performans regresyon testi

Otomatik performans regresyon testi için `criterion` crate'i kullanılabilir. Bu araç, her çalıştırmada benchmark sonuçlarını kaydeder ve önceki sonuçlarla karşılaştırır.

Cargo.toml'a ekleyin:
```toml
[dev-dependencies]
criterion = "*"
```

`benches/bench.rs`:
```rust
use criterion::{criterion_group, criterion_main, Criterion};

fn sum_benchmark(c: &mut Criterion) {
    c.bench_function("sum", |b| {
        b.iter(|| (0..1_000_000).sum::<u64>())
    });
}

criterion_group!(benches, sum_benchmark);
criterion_main!(benches);
```

Terminalde:
```
cargo bench
```
Çıktıda, önceki çalıştırmalarla karşılaştırmalı performans raporu yer alır.
