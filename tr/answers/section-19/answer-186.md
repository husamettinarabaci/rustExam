## 📘 Bölüm: Eşzamanlılık ve Çoklu İş Parçacığı  
### 🔹 Kategori: Send ve Sync Trait'leri  
#### ✅ Cevap 186: Send ve Sync trait'lerinin amacı nedir?

`Send`, bir tipin thread'ler arasında taşınabileceğini belirtir. `Sync`, bir tipin birden fazla thread tarafından güvenli şekilde referans alınabileceğini gösterir.

- `i32`, `String` ve `Vec<T>` hem `Send` hem de `Sync`'tir.
- `Rc<T>` ne `Send` ne de `Sync`'tir.
- `Arc<T>`, `T` de uygunsa hem `Send` hem de `Sync`'tir.

Bu trait'ler, derleyici tarafından thread'ler arası güvenli paylaşım ve taşımayı sağlamak için otomatik olarak uygulanır.
