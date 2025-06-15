## 📘 Bölüm: Crate'ler ve Harici Paketler  
### 🔹 Kategori: Harici Crate Kullanımı  
#### ✅ Cevap 143: Koda harici crate ekleme

Rust'ta harici bir crate kullanmak için önce `Cargo.toml` dosyasına eklenir, sonra kodda içe aktarılır. Aşağıda `rand` paketiyle 1-10 arasında rastgele sayı üretme örneği verilmiştir:

`Cargo.toml`'a ekleyin:
```toml
[dependencies]
rand = "0.8"
```

Rust kodu:
```rust
use rand::Rng;

fn main() {
    let mut rng = rand::thread_rng();
    let n: u32 = rng.gen_range(1..=10);
    println!("Rastgele sayı: {}", n);
}
```

Bu örnek, harici bir crate'in nasıl ekleneceğini, içe aktarılacağını ve kullanılacağını gösterir.
