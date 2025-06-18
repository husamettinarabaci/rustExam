## 📘 Bölüm: Profil ve Performans Ayarı  
### 🔹 Kategori: Profil ve Analiz Araçları  
#### ✅ Cevap 972: Flamegraph ile CPU kullanımını görselleştirme

`flamegraph` aracı, bir programın hangi fonksiyonlarda ne kadar CPU zamanı harcadığını görsel olarak gösterir. Rust programınızı çalıştırırken `cargo flamegraph` komutunu kullanarak bir SVG dosyası elde edebilirsiniz.

```rust
fn main() {
    let mut sum = 0u64;
    for i in 0..1_000_000_000 {
        sum = sum.wrapping_add(i);
    }
    println!("Sum: {}", sum);
}
```

Terminalde:
```
cargo install flamegraph
cargo flamegraph
```
Oluşan `flamegraph.svg` dosyasını bir tarayıcıda açarak analiz edebilirsiniz.
