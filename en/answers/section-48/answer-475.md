## 📘 Section: CLI Applications with Clap  
### 🔹 Category: Argument Validation  
#### ✅ Answer 475: Validating argument values

This example uses `clap` to validate that an argument falls within a specific range. An error message is shown for invalid values.

```rust
use clap::{App, Arg};

fn main() {
    let matches = App::new("ValidateCLI")
        .arg(Arg::with_name("age")
            .required(true)
            .validator(|v| {
                v.parse::<u32>()
                    .map_err(|_| String::from("Please enter a valid number"))
                    .and_then(|n| if n >= 18 && n <= 99 {
                        Ok(())
                    } else {
                        Err(String::from("Age must be between 18 and 99"))
                    })
            })
            .help("Enter your age (18-99)"))
        .get_matches();

    let age = matches.value_of("age").unwrap();
    println!("Your age: {}", age);
}
```
