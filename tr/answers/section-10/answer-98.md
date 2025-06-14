## 📚 Bölüm: Trait'ler  
### 🔹 Kategori: Trait Kalıtımı  
#### ✅ Cevap 98: Trait kalıtımı

**Açıklama:**
Trait'ler başka trait'lerden kalıtım alabilir, uygulayıcılar tüm metotları implemente etmelidir.

```rust
trait Temel {
    fn temel(&self);
}
trait Alt: Temel {
    fn alt(&self);
}

struct Ornek;
impl Temel for Ornek {
    fn temel(&self) { println!("Temel"); }
}
impl Alt for Ornek {
    fn alt(&self) { println!("Alt"); }
}
```
