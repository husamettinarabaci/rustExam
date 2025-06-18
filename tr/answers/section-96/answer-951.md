## 📘 Bölüm: İleri Test ve Biçimsel Doğrulama  
### 🔹 Kategori: Özellik Tabanlı Testler ve Doğrulama  
#### ✅ Cevap 951: `quickcheck` ile özellik tabanlı testler

`quickcheck` crate'i, fonksiyonların belirli özellikleri her türlü giriş için sağladığını test etmek için kullanılır. Aşağıdaki örnekte, toplama işleminin değişmeli (a + b == b + a) olduğu test edilmektedir.

```rust
#[cfg(test)]
mod tests {
    use quickcheck::quickcheck;

    #[test]
    fn prop_addition_commutative() {
        quickcheck(|a: i32, b: i32| a + b == b + a);
    }
}
```
