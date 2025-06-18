## 📘 Bölüm: İleri Sahiplik: Grafikler, Döngüler ve İçsel Değiştirilebilirlik  
### 🔹 Kategori: RefCell ve try_borrow ile Güvenli Ödünç Alma  
#### ❓ Soru 706: try_borrow ile başarısız değiştirilebilir ödünçleri yönetme

Aşağıdakileri yapan bir Rust programı yazın:

- `RefCell<T>` ile bir değeri değiştirilebilir olarak ödünç alın.
- Aynı anda ikinci bir değiştirilebilir ödünç almaya çalışın ve `try_borrow_mut` ile sonucu yönetin.
- Hatanın nasıl güvenli şekilde ele alınabileceğini gösterin.

🔧 **Görev:** `try_borrow` ve `try_borrow_mut` ile ödünç alma hatalarının panik olmadan nasıl yönetilebileceğini gösteren bir örnek hazırlayın.
