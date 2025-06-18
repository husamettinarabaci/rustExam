## 📘 Bölüm: Rust'ta Alan Özel Dilleri (DSL)  
### 🔹 Kategori: Özel DSL girdisini yapılandırılmış tokenlara ayırma  
#### ✅ Cevap 892: Özel DSL girdisini yapılandırılmış tokenlara ayırma

Bir DSL girdisini tokenlara ayırmak için metni parçalara bölebilir ve her parçayı bir enum ile modelleyebilirsiniz.

```rust
enum Token {
    Number(i32),
    Plus,
    Minus,
}

fn tokenize(input: &str) -> Vec<Token> {
    input.split_whitespace().map(|w| match w {
        "+" => Token::Plus,
        "-" => Token::Minus,
        n => Token::Number(n.parse().unwrap()),
    }).collect()
}

fn main() {
    let tokens = tokenize("3 + 4 - 2");
    // tokens: [Number(3), Plus, Number(4), Minus, Number(2)]
}
```

Bu örnekte, DSL girdisi kelime kelime tokenlara ayrılır ve enum ile modellenir.
