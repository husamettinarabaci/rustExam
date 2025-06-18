## 📘 Bölüm: Sistem Programlama Ustalığı  
### 🔹 Kategori: Flamegraph ve Perf ile Profil Çıkarma  
#### ✅ Cevap 600: Flamegraph ve perf ile ileri profil çıkarma

Rust kodunda perf ve flamegraph ile profil çıkarma için aşağıdaki adımlar izlenir:

```rust
// Örnek fonksiyon
fn compute() {
    let mut sum = 0;
    for i in 0..1_000_000 {
        sum += i;
    }
    println!("Sum: {}", sum);
}

fn main() {
    compute();
}
```

// Terminalde:
// 1. `cargo build --release`
// 2. `perf record -g ./target/release/<binary>`
// 3. `perf script | flamegraph > flamegraph.svg`
//
// Elde edilen flamegraph.svg dosyası, kodunuzdaki darboğazları görsel olarak analiz etmenizi sağlar.
