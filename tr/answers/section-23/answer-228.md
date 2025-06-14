## 📘 Bölüm: Jenerikler II  
### 🔹 Kategori: Jenerik trait nesneleri  
#### ✅ Cevap 228: Jenerik trait nesneleri

Trait nesneleri dinamik gönderim sağlar, ancak jenerik metotları olan trait'lerle kullanılamaz.

```rust
trait Ciz {
    fn ciz(&self);
}

fn nesneyi_ciz(obj: Box<dyn Ciz>) {
    obj.ciz();
}
```

Jenerik metotlu trait'ler trait nesnesi olamaz.
