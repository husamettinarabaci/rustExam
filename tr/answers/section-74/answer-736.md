## 📘 Bölüm: Trait Nesneleri ve VTable Mekanikleri
### 🔹 Kategori: Dinamik Dağıtım Maliyetini Ölçme ve Karşılaştırma
#### ✅ Cevap 736: Dinamik dağıtım maliyetini ölçme ve karşılaştırma

Trait nesneleriyle (`dyn Trait`) dinamik dağıtım, statik dağıtıma göre küçük bir çalışma zamanı maliyeti ekler. Bunu, metot çağrılarını döngüde zamanlayarak ölçebilirsiniz.

```rust
use std::time::Instant;

trait Isci {
    fn is_yap(&self) -> u64;
}

struct Somut;
impl Isci for Somut {
    fn is_yap(&self) -> u64 { 42 }
}

fn main() {
    let s = Somut;
    let nesne: &dyn Isci = &s;
    let n = 10_000_000;

    let basla = Instant::now();
    let mut toplam = 0;
    for _ in 0..n {
        toplam += s.is_yap(); // statik dağıtım
    }
    println!("Statik dağıtım: {:?}", basla.elapsed());

    let basla = Instant::now();
    let mut toplam2 = 0;
    for _ in 0..n {
        toplam2 += nesne.is_yap(); // dinamik dağıtım
    }
    println!("Dinamik dağıtım: {:?}", basla.elapsed());
}
```

Dinamik dağıtım genellikle vtable bakışı nedeniyle biraz daha yavaştır.
