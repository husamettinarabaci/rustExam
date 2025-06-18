## 📘 Bölüm: Trait Nesneleri ve VTable Mekanikleri
### 🔹 Kategori: Birden Fazla Trait Bound ile `dyn Trait` Kullanımı
#### ✅ Cevap 734: Birden fazla trait bound ile `dyn Trait` kullanımı

Birden fazla trait bound ile trait nesnesi kullanmak için `+` sözdizimini kullanabilirsiniz (ör. `dyn TraitA + TraitB`). Bu, tüm belirtilen trait'leri uygulayan nesneleri kabul etmenizi sağlar. Sadece nesne güvenli trait'ler trait nesnesi olarak kullanılabilir.

```rust
trait TraitA {
    fn a(&self);
}
trait TraitB {
    fn b(&self);
}

struct MyStruct;
impl TraitA for MyStruct {
    fn a(&self) { println!("TraitA::a"); }
}
impl TraitB for MyStruct {
    fn b(&self) { println!("TraitB::b"); }
}

fn kullan(obj: &dyn TraitA + TraitB) {
    obj.a();
    obj.b();
}

fn main() {
    let s = MyStruct;
    kullan(&s);
}
```
