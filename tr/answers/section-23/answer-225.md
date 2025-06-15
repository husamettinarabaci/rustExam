## 📘 Bölüm: Jenerikler II  
### 🔹 Kategori: Ömürlü jenerik yapılar  
#### ✅ Cevap 225: Ömür parametreli jenerik yapı tanımlama

Bu örnekte, hem jenerik tür parametresi hem de ömür parametresi içeren bir yapı tanımlanmıştır. `Holder` yapısı, `T` türünden bir değere referans tutar ve referansın ömrünü garanti altına alır. `get` metodu ise referansı döndürür.

```rust
struct Holder<'a, T> {
    value: &'a T,
}

impl<'a, T> Holder<'a, T> {
    fn get(&self) -> &T {
        self.value
    }
}

fn main() {
    let x = 42;
    let holder = Holder { value: &x };
    println!("Tutulan değer: {}", holder.get());
}
```
