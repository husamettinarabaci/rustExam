## 📘 Bölüm: Metaprogramlama ve Yansıma
### 🔹 Kategori: Rust ile Statik Analiz Araçları Oluşturma
#### ✅ Cevap 947: Rust ile statik analiz araçları oluşturma

Statik analiz, kodu çalıştırmadan inceleyerek hata bulmaya, stil zorlamaya ve güvenliği artırmaya yardımcı olur. Rust ekosisteminde `syn` gibi crate'ler kodu ayrıştırmak için kullanılabilir.

Örnek: `syn` ile bir Rust dosyasını ayrıştırıp fonksiyon sayısını bulmak:

```rust
use syn::{File, Item};
use std::fs;

fn main() {
    let kod = fs::read_to_string("src/main.rs").unwrap();
    let ast: File = syn::parse_file(&kod).unwrap();
    let fonksiyon_sayisi = ast.items.iter().filter(|item| matches!(item, Item::Fn(_))).count();
    println!("Fonksiyon sayısı: {}", fonksiyon_sayisi);
}
```

Uygulamalar: linting, kod metrikleri, stil kuralları. Sınırlar: karmaşık kodun analizi zor olabilir, bazı kontroller için tam semantik bilgi gerekir (ileri düzey için `rust-analyzer` kullanılabilir).
