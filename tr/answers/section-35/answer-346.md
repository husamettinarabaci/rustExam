## 📘 Bölüm: Test ve Hata Ayıklama  
### 🔹 Kategori: Entegrasyon Testleri  
#### ✅ Cevap 346: `#[should_panic]` ile hata durumlarını test etme

Rust'ta bir fonksiyonun paniklediği durumu test etmek için test fonksiyonunu `#[should_panic]` özniteliği ile işaretleyebilirsiniz. Bu, testin panik beklediği anlamına gelir. Eğer test sırasında panik oluşmazsa test başarısız olur.

Aşağıda örnek bir kullanım gösterilmiştir:

```rust
#[cfg(test)]
mod tests {
    #[test]
    #[should_panic]
    fn test_vec_index_out_of_bounds() {
        let v = vec![1, 2, 3];
        // Geçersiz indeks ile erişim panik oluşturur
        let _ = v[10];
    }
}
```

Bu testte, vektörün geçersiz bir indeksle erişilmesi panik oluşturur ve test başarılı olur.
