## 📘 Bölüm: İleri Trait Tasarımı ve Kullanımı
### 🔹 Kategori: Birden Fazla Trait Implementasyonunda Çakışma Çözümü
#### ✅ Cevap 626: Birden fazla trait implementasyonunda çakışma çözümü

Bir tip birden fazla trait'i ve aynı isimli metotları uyguladığında, hangi trait'in metodunun çağrılacağını tam olarak belirtmek için tam nitelikli sözdizimi kullanılır. Rust, aynı tip ve trait çifti için çakışan implementasyonlara izin vermez, ancak metot adı çakışmalarını çağrı sırasında çözebilirsiniz.

```rust
trait A {
    fn foo(&self) {
        println!("A::foo");
    }
}
trait B {
    fn foo(&self) {
        println!("B::foo");
    }
}

struct S;

impl A for S {}
impl B for S {}

fn main() {
    let s = S;
    A::foo(&s); // A'nın foo'su çağrılır
    B::foo(&s); // B'nin foo'su çağrılır
}
```
