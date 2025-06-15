## 📘 Bölüm: Jenerikler II  
### 🔹 Kategori: Jenerik Sabit Parametreler  
#### ❓ Soru 230: Yapılarda Jenerik Sabit Parametre Kullanımı

Aşağıdaki adımları izleyerek jenerik sabit parametre kullanan bir Rust yapısı yazın:

- `T` tür parametresi ve `N` sabit parametresi (bir tamsayı) alan bir `ArrayHolder` yapısı tanımlayın.
- Yapı, `[T; N]` türünde bir alan içermelidir.
- `[T; N]` türünde bir dizi alıp `ArrayHolder<T, N>` döndüren bir `new` kurucu fonksiyonu yazın.
- Uzunluğu 4 olan `i32` dizisiyle bir `ArrayHolder` örneği oluşturun.

🔧 **Görev:** Her tür ve boyutta dizi tutabilen, jenerik sabit parametreli bir yapı tanımlayın ve örnek kullanımını gösterin.
