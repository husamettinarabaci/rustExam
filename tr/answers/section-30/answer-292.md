## 📘 Bölüm: Modüller ve Crate Yapısı  
### 🔹 Kategori: Kodu Birden Fazla Dosyaya Bölme  
#### ✅ Cevap 292: Kodu birden fazla dosya ve klasöre bölme

Bu soruda, Rust'ta kodun birden fazla dosyaya bölünerek modül yapısının nasıl oluşturulacağı gösterilmektedir. Ana dosyada (`main.rs`) modül tanımlanır, modül ayrı bir dosyada tutulur ve fonksiyonlar uygun şekilde ithal edilir.

`main.rs`:
```rust
mod modul;
use modul::selamla;

fn main() {
    selamla();
}
```

`modul.rs`:
```rust
pub fn selamla() {
    println!("Farklı dosyadaki modülden selamlar!");
}
```
