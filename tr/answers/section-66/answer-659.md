## 📘 Bölüm: Unsafe Kod Desenleri ve Güvenlik
### 🔹 Kategori: Unsafe kodun sağlamlığını denetleme
#### ✅ Cevap 659: Unsafe kodun sağlamlığını denetleme

Unsafe kodun sağlamlığını denetlemek, onun doğru kullanıldığında tanımsız davranışa yol açmayacağından emin olmaktır. Pointer geçerliliği, aliasing, başlatma ve değişmezler kontrol edilir.

```rust
fn kontrolsuz(slice: &[i32], idx: usize) -> &i32 {
    // GÜVENLİK: Çağıran idx < slice.len() garantilemeli
    unsafe { slice.get_unchecked(idx) }
}
```

Çağıranın garanti etmesi gerekenleri dokümante edin ve tüm güvenlik ihlallerini gözden geçirin.
