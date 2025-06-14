## 📚 Bölüm: Trait'ler  
### 🔹 Kategori: Çoklu Trait'ler  
#### ✅ Cevap 94: Çoklu trait uygulamak

**Açıklama:**
Bir yapı birden fazla trait'i implemente edebilir, her biri farklı davranış sağlar.

```rust
trait A { fn a(&self); }
trait B { fn b(&self); }

struct MyStruct;
impl A for MyStruct {
    fn a(&self) { println!("A"); }
}
impl B for MyStruct {
    fn b(&self) { println!("B"); }
}

fn main() {
    let s = MyStruct;
    s.a();
    s.b();
}
```
