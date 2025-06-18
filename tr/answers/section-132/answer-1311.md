## 📘 Bölüm: Gömülü DSL'ler: Ayrıştırma ve Derleme
### 🔹 Kategori: DSL Ayrıştırıcıları
#### ✅ Cevap 1311: DSL sözdizimi için ayrıştırıcı yazma

Bu örnekte, bir DSL ifadesini boşluklara göre bölen ve tokenları bir vektörde toplayan basit bir ayrıştırıcı fonksiyon yazılmıştır.

```rust
fn parse_dsl(input: &str) -> Vec<&str> {
    input.split_whitespace().collect()
}

fn main() {
    let expr = "add 1 2";
    let tokens = parse_dsl(expr);
    println!("{:?}", tokens); // ["add", "1", "2"]
}
```
