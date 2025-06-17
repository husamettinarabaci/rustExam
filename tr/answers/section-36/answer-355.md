## 📘 Bölüm: Closure ve Fonksiyonel Teknikler  
### 🔹 Kategori: Closure'ları struct alanı olarak kullanma  
#### ✅ Cevap 355: Closure'ı bir struct alanı olarak saklama

Bu soruda closure'ı bir struct'ın alanı olarak saklamayı öğreniyorsunuz. Rust'ta closure'lar, trait nesnesi olarak (`Box<dyn Fn(i32) -> i32>`) struct içinde saklanabilir. Bu sayede struct'ın metotları closure'ı çağırabilir.

```rust
struct Calculator {
    operation: Box<dyn Fn(i32) -> i32>,
}

impl Calculator {
    fn calculate(&self, value: i32) -> i32 {
        (self.operation)(value)
    }
}

fn main() {
    let calc = Calculator {
        operation: Box::new(|x| x * 2),
    };
    println!("{}", calc.calculate(5)); // 10
}
```
