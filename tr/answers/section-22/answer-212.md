## 📘 Bölüm: Jenerikler I  
### 🔹 Kategori: Jenerik Yapılar  
#### ✅ Cevap 212: Jenerik yapılar

Jenerik yapılar, herhangi bir türde değer tutabilen veri yapıları tanımlamanıza olanak tanır. Bu örnekte, `Boxed` adlı struct `T` türü üzerinde jeneriktir. `Boxed<i32>`, `Boxed<&str>` gibi farklı türlerle örnekler oluşturabilirsiniz.

```rust
struct Boxed<T> {
    value: T,
}

fn main() {
    let int_box = Boxed { value: 10 };
    let str_box = Boxed { value: "merhaba" };
    println!("{}", int_box.value);
    println!("{}", str_box.value);
}
```
