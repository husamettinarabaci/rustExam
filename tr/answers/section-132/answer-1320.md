## 📘 Bölüm: Gömülü DSL'ler: Ayrıştırma ve Derleme
### 🔹 Kategori: DSL'leri Kullanıcı Tanımlı Yapılarla Genişletme
#### ✅ Cevap 1320: DSL'leri kullanıcı tanımlı yapılarla genişletme

Bu örnekte, DSL'e yeni bir "sub" komutu eklenmiş ve hem standart hem de yeni komutun işlenmesi sağlanmıştır.

```rust
fn eval(tokens: &[&str]) -> Option<i32> {
    match tokens {
        ["add", a, b] => Some(a.parse::<i32>().ok()? + b.parse::<i32>().ok()?),
        ["sub", a, b] => Some(a.parse::<i32>().ok()? - b.parse::<i32>().ok()?),
        _ => None,
    }
}

fn main() {
    let add_tokens = vec!["add", "5", "3"];
    let sub_tokens = vec!["sub", "5", "3"];
    println!("add: {:?}", eval(&add_tokens)); // add: Some(8)
    println!("sub: {:?}", eval(&sub_tokens)); // sub: Some(2)
}
```
