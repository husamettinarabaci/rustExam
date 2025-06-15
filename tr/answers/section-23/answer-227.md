## 📘 Bölüm: Jenerikler II  
### 🔹 Kategori: Ömürlü jenerik metotlar  
#### ✅ Cevap 227: Ömür parametreli jenerik metot implementasyonu

Bu örnekte, hem jenerik tür hem de ömür parametresi içeren bir metot implementasyonu gösterilmiştir. `Pair` yapısı, `T` türünden iki değer tutar. `longest_ref` metodu ise aynı ömre sahip iki string slice alır ve uzun olanı döndürür.

```rust
struct Pair<T> {
    a: T,
    b: T,
}

impl<T> Pair<T> {
    fn longest_ref<'a>(&self, x: &'a str, y: &'a str) -> &'a str {
        if x.len() > y.len() {
            x
        } else {
            y
        }
    }
}

fn main() {
    let pair = Pair { a: 1, b: 2 };
    let s1 = "merhaba";
    let s2 = "dünya!";
    let sonuc = pair.longest_ref(s1, s2);
    println!("En uzun: {}", sonuc);
}
```
