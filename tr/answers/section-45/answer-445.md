## 📘 Bölüm: Ömürler ve Ödünç Alma Pratiği  
### 🔹 Kategori: İç İçe Ömürler ve Yapı Metotları  
#### ✅ Cevap 445: İç içe ömürler ve yapı metotları

Birden fazla ömür parametresiyle struct ve metot tanımlanabilir. Aşağıda iki farklı ömür parametresi kullanan bir struct ve metot örneği verilmiştir.

```rust
struct Cift<'a, 'b> {
    birinci: &'a str,
    ikinci: &'b str,
}

impl<'a, 'b> Cift<'a, 'b> {
    fn birlestir(&self) -> String {
        format!("{}-{}", self.birinci, self.ikinci)
    }
}

fn main() {
    let s1 = "merhaba";
    let s2 = "rust";
    let c = Cift { birinci: s1, ikinci: s2 };
    println!("{}", c.birlestir());
}
```
