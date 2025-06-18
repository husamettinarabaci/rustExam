## 📘 Bölüm: Gömülü DSL'ler: Ayrıştırma ve Derleme
### 🔹 Kategori: Token Akışları ve Makro Girdi İşleme
#### ✅ Cevap 1312: Token akışları ve makro girdi işleme

Bu örnekte, bir DSL girdisini karakter karakter işleyen ve her karakteri bir token olarak vektöre ekleyen bir fonksiyon gösterilmiştir.

```rust
fn tokenize_chars(input: &str) -> Vec<char> {
    input.chars().collect()
}

fn main() {
    let expr = "a+b";
    let tokens = tokenize_chars(expr);
    println!("{:?}", tokens); // ['a', '+', 'b']
}
```
