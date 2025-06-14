## 📘 Bölüm: İleri Düzey Traitler ve Jenerikler  
### 🔹 Kategori: Jenerik Traitler  
#### ✅ Cevap 160: Birden fazla tip için jenerik trait implementasyonu

Bu örnek, jenerik bir trait tanımlamayı ve hem vektör hem de dizi için implement etmeyi gösterir.

```rust
trait Summable {
    fn sum(&self) -> i32;
}

impl Summable for Vec<i32> {
    fn sum(&self) -> i32 {
        self.iter().sum()
    }
}

impl Summable for [i32; 3] {
    fn sum(&self) -> i32 {
        self.iter().sum()
    }
}
```
