## 📘 Bölüm: Traits ve Trait Bound'lar
### 🔹 Kategori: Trait Hiyerarşileri ve Üst Traitler
#### ❓ Soru 318: Üst traitlerle trait hiyerarşileri oluşturma

Aşağıdakileri yapan bir Rust programı yazın:

- `Speak` adında bir trait tanımlayın ve içinde bir `speak` metodu olsun.
- `Animal` adında bir üst trait tanımlayın ve bu trait, `Speak` trait'ini üst trait olarak kullansın.
- `Dog` adında bir struct oluşturun ve hem `Speak` hem de `Animal` trait'lerini uygulayın.
- `main` fonksiyonunda bir `Dog` nesnesi oluşturun ve hem `speak` hem de `describe` metodunu çağırın.

🔧 **Görev:** Trait hiyerarşisi oluşturmak için üst trait (supertrait) kullanın ve bir struct'a birden fazla trait uygulayın.
