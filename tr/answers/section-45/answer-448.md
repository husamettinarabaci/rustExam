## 📘 Bölüm: Ömürler ve Ödünç Alma Pratiği  
### 🔹 Kategori: Birden Fazla Ömür Parametreli Yapılar  
#### ✅ Cevap 448: Birden fazla ömür parametreli yapılar

Birden fazla ömür parametresi, farklı referansların ömürlerinin birbirinden bağımsız olmasını sağlar. Aşağıda iki ömür parametresi kullanan bir struct örneği verilmiştir.

```rust
struct Baglanti<'a, 'b> {
    kaynak: &'a str,
    hedef: &'b str,
}

fn main() {
    let s1 = String::from("A");
    let s2 = String::from("B");
    let b = Baglanti { kaynak: &s1, hedef: &s2 };
    println!("{} -> {}", b.kaynak, b.hedef);
}
```
