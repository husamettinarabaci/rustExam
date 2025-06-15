## 📘 Bölüm: Jenerikler II  
### 🔹 Kategori: Birden fazla jenerik parametre  
#### ✅ Cevap 221: Birden fazla jenerik parametre

Birden fazla jenerik tür parametresi kullanmak için, tür parametrelerini köşeli parantezler içinde virgül ile ayırarak tanımlayın. Burada, `pair_to_tuple` fonksiyonu iki değeri alıp bir demet olarak döndürür.

```rust
fn pair_to_tuple<T, U>(a: T, b: U) -> (T, U) {
    (a, b)
}

fn main() {
    let t1 = pair_to_tuple(42, "merhaba");
    let t2 = pair_to_tuple('a', 3.14);
    println!("{:?}", t1);
    println!("{:?}", t2);
}
```
Bu fonksiyon, iki farklı türü bir demet olarak döndürmek için kullanılabilir.
