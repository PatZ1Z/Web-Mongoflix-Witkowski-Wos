| Pole        | Typ danych        | Przykład                  | Opis |
|------------|------------------|---------------------------|------|
| id         | Number           | 1                         | Unikalny identyfikator filmu |
| title      | String           | "Titanic"                 | Tytuł filmu |
| year       | Number           | 1997                      | Rok produkcji |
| genres     | Array[String]    | ["Dramat","Romans"]       | Lista gatunków |
| type       | String           | "Premium"                 | Typ dostępu (Premium / Public) |
| views      | Number           | 1500000                   | Liczba wyświetleń |
| director   | String           | "James Cameron"           | Reżyser filmu |
| actors     | Array[String]    | ["Leonardo DiCaprio"]     | Lista aktorów |
| reviews    | Array[Object]    | [{...}]                   | Lista opinii użytkowników |

## Review
| Pole  | Typ danych | Przykład              | Opis |
|-------|-----------|-----------------------|------|
| user  | String    | "anna"                | Nazwa użytkownika |
| rating | Number    | 9                     | Ocena (1–10) |
| comment | String    | "Świetny film"        | Treść opinii |