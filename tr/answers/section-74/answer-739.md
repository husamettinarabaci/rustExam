## 📘 Bölüm: Trait Nesneleri ve VTable Mekanikleri
### 🔹 Kategori: Nesne Güvenliği Kuralları ve İhlallerini Gösterme
#### ✅ Cevap 739: Nesne güvenliği kuralları ve ihlallerini gösterme

Bir trait'in tüm metotları trait nesnesi üzerinden çağrılabiliyorsa nesne güvenlidir. Jenerik metotlar veya imzada `Self` kullanan metotlar nesne güvenli değildir.

```rust
// Nesne güvenli değil: jenerik metot
trait NesneGuvenliDegil {
    fn foo<T>(&self, t: T);
}

// Bu derlenmez:
// let obj: &dyn NesneGuvenliDegil;

// Nesne güvenli sürüm:
trait NesneGuvenli {
    fn foo(&self);
}

struct S;
impl NesneGuvenli for S {
    fn foo(&self) { println!("Nesne güvenli!"); }
}

fn main() {
    let s = S;
    let obj: &dyn NesneGuvenli = &s;
    obj.foo();
}
```

Nesne güvenli olmayan trait'ler için trait nesnesi oluşturulamaz, derleyici hata verir.
