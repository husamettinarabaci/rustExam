## 📘 Bölüm: Akıllı İşaretçiler ve İçsel Değiştirilebilirlik  
### 🔹 Kategori: Ref ve RefMut ile Çalışma Zamanı Borç Hatalarını Ayıklama  
#### ❓ Soru 277: Çalışma zamanında `Ref` ve `RefMut` ile borç ihlallerini ayıklama

Aşağıdaki adımları izleyerek bir Rust programı yazın:

- Bir yapının alanını `RefCell<T>` ile sarmalayın.
- Aynı anda birden fazla mutable veya immutable borrow denemesi yaparak borç ihlali oluşturun.
- Oluşan borç ihlalini yakalamak ve hata mesajını göstermek için `try_borrow` ve `try_borrow_mut` yöntemlerini kullanın.
- Hata mesajını kullanıcıya yazdırın.

🔧 **Görev:** `RefCell` ile borçlanma kurallarının çalışma zamanında nasıl ihlal edildiğini ve bu hataların nasıl ayıklanıp yönetilebileceğini gösteren bir örnek oluşturun.
