## 📘 Bölüm: Eşzamanlılık ve Çoklu İş Parçacığı  
### 🔹 Kategori: Paylaşılan Durum  
#### ❓ Soru 183: Paylaşılan durum için Mutex kullanımı

Birden fazla thread'in paylaşılan bir sayacı güvenli şekilde artırdığı bir Rust programı yazın.

- `std::sync::Arc` ve `std::sync::Mutex` kullanın.
- Birden fazla thread başlatıp sayacı artırın.
- Tüm thread'ler bitince sonucu yazdırın.

🔧 **Görev:** `Mutex` ve `Arc` ile güvenli paylaşılan durum değişikliğini gösterin.
