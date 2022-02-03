

# 03.02.2022

Heute erstellen wir spiele mit [p5.js](https://p5js.org/).


1. Um ein eigenes spiel zu programmieren `Browsergames/p5-template` in einen eigenen Ordner kopieren. z.B in `Browsergames/Sebastian`.

2. In dem Ordner `pnpm i` ausführen um die Abhängigkeiten (Dependencies) zu installieren.

3. Den neu erstellten Ordner in vscode öffnen.
    - Entweder über `File > Open Folder...`
    - oder in der Konsole `code Browsergames/<Dein Ordnername>` eingeben.

4. Vite-erweiterung aus dem `vscode-marketplace` installieren.

5. Lokalen dev-server starten. (dev = development)
    - rechts unten sollte ein Blitz sein. Darüber kann men den Server starten
        - Danach `localhost:4000` im Browser öffnen
    - ansonsten in der Konsole (Deren root jetzt in dem erstelleten Ordner ist) `pnpm dev` aufrufen.
        - Danach `localhost:3000` im Browser öffnen

6. Den Code in `Browsergames/<Dein Ordnername>/src/main.ts` verändern.