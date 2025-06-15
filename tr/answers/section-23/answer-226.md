## 📘 Bölüm: Jenerikler II  
### 🔹 Kategori: Ömürlü jenerik enumlar  
#### ✅ Cevap 226: Ömür parametreli jenerik enum tanımlama

Bu örnekte, hem jenerik tür parametresi hem de ömür parametresi içeren bir enum tanımlanmıştır. `RefOrValue` enum'u, ya bir referans ya da sahipli bir değer tutabilir. `get` metodu ise her iki durumda da değere referans döndürür.

```rust
enum RefOrValue<'a, T> {
    Ref(&'a T),
    Val(T),
}

impl<'a, T> RefOrValue<'a, T> {
    fn get(&self) -> &T {
        match self {
            RefOrValue::Ref(r) => r,
            RefOrValue::Val(v) => v,
        }
    }
}

fn main() {
    let x = 10;
    let r = RefOrValue::Ref(&x);
    let v = RefOrValue::Val(20);
    println!("Ref: {}", r.get());
    println!("Val: {}", v.get());
}
```
