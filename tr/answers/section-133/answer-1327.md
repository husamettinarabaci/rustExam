## 📘 Bölüm: Derleme Zamanı Programlama Desenleri  
### 🔹 Kategori: Tip Düzeyinde Hesaplamalar için Trait'ler  
#### ✅ Cevap 1327: Trait'lerle tip düzeyinde hesaplamalar

Trait'ler ve ilişkili tiplerle tip düzeyinde işlemler yapılabilir. Aşağıda, toplama işlemini tip düzeyinde yapan bir örnek verilmiştir.

```rust
trait Add {
    type Output;
}

struct One;
struct Two;
struct Three;

impl Add for One {
    type Output = Two;
}

impl Add for Two {
    type Output = Three;
}

fn main() {
    // Tip düzeyinde: One + One = Two
    let _result: <One as Add>::Output = Two;
}
```
Bu örnekte, toplama işlemi tip düzeyinde trait ile modellenmiştir.
