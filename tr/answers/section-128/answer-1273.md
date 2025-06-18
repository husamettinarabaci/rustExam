## 📘 Bölüm: Derleme Zamanı Motorları ve Metaprogramlama
### 🔹 Kategori: Derleme Zamanı Sonlu Durum Makineleri
#### ✅ Cevap 1273: Derleme zamanı sonlu durum makineleri oluşturma

FSM'ler tipler ve trait'lerle derleme zamanında modellenebilir:

```rust
struct DurumA;
struct DurumB;
struct DurumC;

trait Sonraki {
    type Cikis;
    fn sonraki(self) -> Self::Cikis;
}

impl Sonraki for DurumA {
    type Cikis = DurumB;
    fn sonraki(self) -> DurumB { DurumB }
}
impl Sonraki for DurumB {
    type Cikis = DurumC;
    fn sonraki(self) -> DurumC { DurumC }
}

fn main() {
    let a = DurumA;
    let b = a.sonraki();
    let _c = b.sonraki();
}
```

Geçişler tip sistemiyle zorlanır.
