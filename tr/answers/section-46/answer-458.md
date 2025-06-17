## 📘 Bölüm: Test ve Hata Ayıklama  
### 🔹 Kategori: Hata Ayıklama Araçları  
#### ✅ Cevap 458: `dbg!`, `println!` ve IDE araçları ile hata ayıklama

`dbg!` ve `println!` makroları, kodun çalışma zamanındaki değerlerini görmek için kullanılır. IDE'ler ise breakpoint ve adım adım izleme gibi gelişmiş hata ayıklama özellikleri sunar.

```rust
fn sum(a: i32, b: i32) -> i32 {
    dbg!(a);
    println!("b: {}", b);
    a + b
}

fn main() {
    let result = sum(2, 3);
    println!("Sonuç: {}", result);
}
```

IDE'lerde breakpoint koyarak kodu adım adım izleyebilirsiniz.
