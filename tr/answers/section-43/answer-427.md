## 📘 Bölüm: Enumlar ve Veri Modelleme  
### 🔹 Kategori: `Box<Enum>` ile özyinelemeli veri modelleme  
#### ✅ Cevap 427: `Box<Enum>` ile özyinelemeli veri modelleme

Rust'ta özyinelemeli veri yapıları oluşturmak için enumun içinde `Box` kullanılır. Bu, enumun kendi türünden bir alan içermesini sağlar.

```rust
enum List {
    Cons(i32, Box<List>),
    Nil,
}

fn main() {
    let list = List::Cons(1, Box::new(List::Cons(2, Box::new(List::Nil))));
}
```
