## 📘 Bölüm: Test ve Hata Ayıklama
### 🔹 Kategori: Benchmark Yazma
#### ✅ Cevap 847: `criterion` crate ile benchmark yazma

`criterion` crate'i, Rust kodunun performansını hassas şekilde ölçmek için kullanılır. Standart kütüphanedeki benchmark desteği kararsız olduğu için, `criterion` yaygın olarak tercih edilir.

Örnek benchmark:

```rust
use criterion::{black_box, criterion_group, criterion_main, Criterion};

fn bench_addition(c: &mut Criterion) {
    c.bench_function("add", |b| b.iter(|| black_box(2) + black_box(2)));
}

criterion_group!(benches, bench_addition);
criterion_main!(benches);
```

Sonuçlar, fonksiyonun ortalama çalışma süresini ve varyansını gösterir. Yavaş fonksiyonlar optimize edilerek benchmark sonuçları iyileştirilebilir.
