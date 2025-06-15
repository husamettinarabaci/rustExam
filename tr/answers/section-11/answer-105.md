## 📘 Bölüm: Enumlar I  
### 🔹 Kategori: `impl` ile Enum Metotları  
#### ✅ Cevap 105: `impl` ile enum metotları

Bu örnekte, bir enum için `impl` bloğu ile nasıl metot tanımlanır ve bu metot enum örneği üzerinde nasıl çağrılır gösterilmektedir.

```rust
enum Lamba {
    Acik,
    Kapali,
}

impl Lamba {
    fn durum(&self) -> &str {
        match self {
            Lamba::Acik => "Lamba açık.",
            Lamba::Kapali => "Lamba kapalı.",
        }
    }
}

fn main() {
    let masa_lambasi = Lamba::Acik;
    println!("{}", masa_lambasi.durum());
}
```
