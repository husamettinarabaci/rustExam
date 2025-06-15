## 📘 Bölüm: Jenerikler II  
### 🔹 Kategori: Ömürlü jenerik enumlar  
#### ❓ Soru 226: Ömür parametreli jenerik enum tanımlama

Hem jenerik tür parametresi hem de açık ömür parametresi kullanan bir Rust enum'u yazın.

- `RefOrValue` adında iki varyantlı bir enum tanımlayın:
  - `Ref(&'a T)`: `'a` ömrüne sahip `T` türünden bir referans tutar.
  - `Val(T)`: `T` türünden bir değeri sahiplenir.
- Her iki varyanttan da değere referans döndüren bir `get` metodu implemente edin.

🔧 **Görev:** Bir enum tanımında hem jenerik tür hem de ömür parametresi kullanın ve bunun için bir metot yazın.
