## 📘 Bölüm: İleri Trait Sistemi ve Uyum  
### 🔹 Kategori: İlişkili Tipli ve Varsayılan Bound'lu Jenerik Traitler  
#### ✅ Cevap 728: İlişkili tipli ve varsayılan bound'lu jenerik traitler oluşturma

Aşağıdaki örnekte, ilişkili tipli ve varsayılan bound'lu jenerik bir trait tanımlanmıştır. İlişkili tipe örneğin `Default` gibi bir bound eklenebilir ve implementasyonlarda gerekirse bu tip değiştirilebilir.

```rust
// İlişkili tipli ve varsayılan bound'lu trait
trait BenimTrait {
    type Eleman: Default;
    fn eleman_olustur() -> Self::Eleman;
}

// Varsayılan bound ile bir struct için implementasyon
struct BenimYapim;
impl BenimTrait for BenimYapim {
    type Eleman = String;
    fn eleman_olustur() -> Self::Eleman {
        String::default()
    }
}

// Gerekirse ilişkili tip değiştirilebilir
struct IntYapisi;
impl BenimTrait for IntYapisi {
    type Eleman = i32;
    fn eleman_olustur() -> Self::Eleman {
        0
    }
}
```
