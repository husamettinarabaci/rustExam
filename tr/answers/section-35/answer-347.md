## 📘 Bölüm: Test ve Hata Ayıklama  
### 🔹 Kategori: Benchmark Yazma  
#### ✅ Cevap 347: Kararsız `#[bench]` (nightly) ile benchmark yazma

`#[bench]` özniteliği, nightly Rust'ta kullanılabilen ve fonksiyonların performansını ölçmek için kullanılan bir test türüdür. Benchmark fonksiyonları `test` crate'inden gelir ve `b.iter(|| ...)` ile ölçüm yapılır. Benchmark'lar yalnızca nightly derleyici ve `#![feature(test)]` ile çalışır.

```rust
#![feature(test)]
extern crate test;

#[bench]
fn bench_addition(b: &mut test::Bencher) {
    b.iter(|| {
        let mut sum = 0;
        for i in 0..1000 {
            sum += i;
        }
        sum
    });
}
```

Benchmark çalıştırmak için:

```
cargo +nightly bench
```
