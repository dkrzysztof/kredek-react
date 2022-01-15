# Część 2 - Asynchroniczny JavaScript

## 0.0. Repozytorium kredka

Gdyby były problemy/pytania co zrobić, aby przenieść kod z zajęć do katalogu z repozytorium kredka, to wystarczy skopiować pliki źródłowe projektu.

Docelowo powinno to wyglądać tak:

```
RepozytoriumKredka/
├─ .../
├─ JanKowalskiLab6/
├─ JanKowalskiLab7/
│  ├─ node_modules/
│  ├─ src/
│  ├─ public/
│  ├─ package.json
│  ├─ README.md
│  ├─ .gitignore
│
├─ .../
```

Jak powstanie więcej folderów i plików w waszych projektach to oczywiście je też można dodać, ale w głównej mierze to najważniejsze, aby te zamieszczone wyżej znalazły się w waszych repozytoriach.

UWAGA! Jeśli dodacie folder `node_modules` do folderu z repozytorium (czyli tak jak wyżej) to również dodajcie plik `.gitignore`. Katalog `node_modules` zawiera wszystkie pobrane dependencje i nie chcemy żeby znalazły się na repozytorium.

## 0. Prerekwizyty

1. Spullować (`git pull`) najnowszą wersję brancha. Powinnien sie znaleźć podstawowy projekt w katalogu `./part-2`
2. W terminalu przejsc do katalogu z projektem i wywołać komendę `npm i` lub też `npm install`. Jedno i drugie to jest to samo. Pierwsza wersja to jest poprostu skrót drugiej.
3. Uruchomić projekt komendą `npm start`

#### Powinnien wam sie ukazac nastepujacy widok: <div style="width:fit-content;margin:auto">![widok instalacyjny](https://i.imgur.com/k4ZTjs2.png 'widok')</div>

4. Znaleźć i otworzyć projekt z zajęć z Laboratoriów nr 6 (WebAPI do Pizzy)
5. W tym projekcie musimy wprowadzić małe zmiany. Otworzyć plik `Startup.cs` i wprowadzić następujące modyfikacje:

    5.1. Skopiować i dodać linijke `app.UseCors(...)` jeśli takowej nie ma w metodzie `Configure`.

```C#
        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            ...

            app.UseRouting();

            app.UseCors(
                options => options.WithOrigins("http://localhost:3000").AllowAnyMethod().AllowAnyHeader()
            );

            app.UseSwagger();

            ...
        }
```

5.2. Skopiować i dodać linijke `services.AddCors()` w tym samym pliku.

```C#
       // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            ...
            services.AddControllers();
            services.AddCors();
            services.AddSwaggerGen(...);
            ...
        }
```

Umożliwi to nam na bezproblemowe wykonywanie i odbieranie danych z serwera.
