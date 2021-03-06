## BEM project stub - оригинальный репозиторий - [bem/project-stub](https://github.com/bem/project-stub)

В project-stub по умолчанию подключены библиотеки:
* [bem-core](https://ru.bem.info/libs/bem-core/)
* [bem-components](https://ru.bem.info/libs/bem-components/)
* [bem-fontawesome5](https://github.com/b1tc0re/bem-fontawesome5)
* [enb-make](https://github.com/b1tc0re/enb-make) - сборшик проектов

### Отличия от оригинального [bem/project-stub](https://github.com/bem/project-stub)
* Изменил структуру проекта
* Добавил возможность собирать merged-bundle
* Добавил возможность собирать gemini тесты для блоков
* Добавил возможность собирать примеры для блоков
* ~~Добавить библиотеку расширяющий базовый функционал [bem-components](https://ru.bem.info/libs/bem-components/)~~
* Регистрозависимые пути в Windows не правельно зоздаются папки

### Регистрозависимые пути в Windows
Существует проблема в borschik с freeze_paths. В Windows нет возможности создавать папки и файлы с одинаковым 
названием в разных регистрах для решение этой проблемы было принето изменить [borschik](https://github.com/b1tc0re/borschik/commit/91208480eedcd2bfd98397018aac8664ff343dde).
Имейте виду если вы будете разрабатывать проект в двух разный операционных системах Windows + Linux у вас borschik собирет статические файлы в разных папках.

#### Windows
```bash
D:\Project\static\w\asdKLasfljkSA.svg
D:\Project\static\w\Awdsawweqasdf.svg
```
#### Linux или MacOS 
```bash
D:\Project\static\W\asdKLasfljkSA.svg
D:\Project\static\w\Awdsawweqasdf.svg
```
