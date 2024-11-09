# Stundenplan-Frontend [ in Arbeit ]
Hier entsteht ein stark vereinfachtes Stundenplan-Frontend, umgesetzt mit Angular 17/Typescript.

### Technische Hinweise
#### Projetk starten
- im Backend ```StundenplanApplication.kt``` starten (Backend: https://github.com/bta15/stundenplan-be-spring-kotlin)
- im Frontend zu ```/stundenplan``` navigieren und im Terminal ```ng serve``` eingeben

#### ESLint:
- eslint laufen lassen: ``` npm run lint ```

### Benutzerrollen

- Verwalter: Kann Schulen und Fächer erstellen (eine Art Admin)
- Schule: Kann Klassen und Stundenplan erstellen, sieht aber alle anderen Schulen nicht

### TODOs

- [x] mit Backend kommunizieren
- [ ] Auth mit dem Backend machen anstelle des locale storage
- [ ] Tests
- [ ] Dialog stylen
- [ ] Tabelle stylen (hover, Aktionen pro Zeile, ...)
- [ ] erstellen von
  - [x] Fächern
  - Schulen
  - Klassen
  - ....
- [ ] löschen von
  - Fächern
  - Schulen
  - Klassen
  - ....
### Offene technische Ideen
- [x] bootstrap oder tailwind
- cypress
- richtiges Login mit Passwort
- Stundenplan als PDF downloaden
- Backend-Fehler mit Interceptor zentral abfangen
- ...