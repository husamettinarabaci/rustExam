## 📘 Bölüm: Ömürler ve Ödünç Alma Semantiği  
### 🔹 Kategori: Birden fazla ömür parametreli yapı metotları  
#### ✅ Cevap 268: Birden fazla ömür parametreli yapı metotları

Bir yapının metotlarında birden fazla ömür parametresi kullanmak, farklı ömre sahip referanslarla çalışırken gereklidir. Bu, örneğin bir metot hem yapının içindeki bir referansa hem de parametre olarak gelen başka bir referansa dönecekse, ömürlerin birbirinden bağımsız olmasını sağlar.

Aşağıdaki örnekte, iki farklı ömür parametresi kullanan bir yapı ve metot gösterilmiştir:

```rust
struct Container<'a> {
    value: &'a str,
}

impl<'a> Container<'a> {
    fn select<'b>(&'b self, other: &'b str) -> &'b str {
        if self.value.len() > other.len() {
            self.value
        } else {
            other
        }
    }
}
```

Burada `Container` yapısı `'a` ömrüne sahip bir referans tutar. `select` metodu ise hem `self` hem de `other` için bağımsız `'b` ömrü kullanır. Böylece metot, farklı ömürlere sahip referanslarla esnek şekilde çalışabilir.
