## 📘 Bölüm: Performans Optimizasyonu ve Profil
### 🔹 Kategori: Derleyici Bayrakları ile Optimizasyon
#### ✅ Cevap 641: Derleyici bayrakları ile optimizasyon (`-C opt-level`)

Rust derleyicisi, kodunuzu optimize etmek için çeşitli bayraklar sunar. `-C opt-level` bayrağı, derleyicinin uygulayacağı optimizasyon seviyesini belirler. 0'dan 3'e kadar sayısal değerler ve `s`, `z` gibi özel değerler kullanılabilir. `cargo build --release` komutu varsayılan olarak `-C opt-level=3` ile derler.

```rust
fn main() {
    let mut sum = 0;
    for i in 0..1_000_000 {
        sum += i;
    }
    println!("Sum: {}", sum);
}
```

Farklı optimizasyon seviyeleriyle derlemek için:

```bash
cargo build --release # -C opt-level=3
cargo build --release --profile release-with-opt1 # -C opt-level=1
```

`Cargo.toml`'da özel profil tanımlayarak farklı seviyeler denenebilir. Daha yüksek optimizasyon genellikle daha hızlı kod üretir, ancak derleme süresi artabilir.
