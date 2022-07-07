## Dashboard

Esse projeto é uma implementação do Admin One Dashboard, o qual é um dashboard open source, construido com Vue.JS 3, Inertia JS e Tailwind CSS 3, tendo-os como dependências. Esse projeto segue uma implementação um pouco diferente da apresentada na [Documentação Oficial](https://github.com/justboil/admin-one-vue-tailwind), não utilizando o Laravel Jetstream.

## Tecnologias Primarias

- [Laravel 8.x](https://laravel.com/docs/8.x)
- [Vue.JS 3.x](https://vuejsbr-docs-next.netlify.app/)
- [Inertia JS](https://inertiajs.com/)
- [Tailwind CSS 3.x](https://tailwindcss.com/docs/guides/laravel)
- [Admin One Dashboard](https://github.com/justboil/admin-one-vue-tailwind)

## Instruções de Uso

Para começar um novo projeto utilizando esse como ponto de partida, siga as instruções abaixo:

1. Clone o repositório, usando o comando abaixo:
```
git clone https://github.com/wagner-m-alves/dashboard.git
```

2. Acesse a raiz do projeto, utilizando o comando abaixo:
```
cd dashboard
```

3. Instale as dependências, utilizando o comando abaixo:
```
composer install
```

4. Crie o arquivo .env, utilizando o comando abaixo:
```
cp .env.example .env
```

5. Gere a chave do projeto, utilizando o comando abaixo:
```
php artisan key:generate
```

## Instruções Para Implementação Manual

### Instalar Laravel 8.x e Dependências Básicas

1. Instale um novo projeto Laravel 8.x, utilizando o comando abaixo. Lembre-se de substituir `new-project` pelo nome do seu projeto.
```
composer create-project laravel/laravel:^8.0 new-project
```

2. Instale o pacote `Ziggy` (pacote que fornece a função global route para o JavaScript), utilizando o comando abaixo:
```
composer require tightenco/ziggy
```

### Instalar Vue.JS 3.x

1. Instale o Vue.JS 3.x, utilizando o comando abaixo:
```
npm install vue
```

### Instalar Inertia

1. Instale os adaptadores do lado do servidor, utilizando o comando abaixo:
```
composer require inertiajs/inertia-laravel
```

2. Crie ou modifique o arquivo `resources/view/app.blade.php`, conforme o conteúdo abaixo:
```
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0,  maximum-scale=1.0" />

        <!-- Styles -->
        <link href="{{ mix('/css/app.css') }}" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        <script src="{{ mix('/js/app.js') }}" defer></script>
        @inertiaHead
    </head>
    <body>
        @inertia
    </body>
</html>
```

3. Crie o middleware do Inertia, utilizando o comando abaixo:
```
php artisan inertia:middleware
```

4. Registre o middleware criado no passo anterior, acrescentando a linha abaixo na seção `web` do arquivo `app/http/kernel.php`:
```
\App\Http\Middleware\HandleInertiaRequests::class,
```

5. Instale as dependências do lado cliente, utilizando o comando abaixo:
```
npm install @inertiajs/inertia @inertiajs/inertia-vue3
```

6. Crie o diretório `resources/js/Pages`.

### Instalar Tailwind CSS 3.x

1. Instale o Tailwind CSS, utilizando o comando abaixo:
```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

2. Adicione o Tailwind CSS ao Laravel Mix, adicionando a linha abaixo dentro do `postcss`,  no arquivo `webpack.mix.js`, localizado na raiz do projeto:
```
require("tailwindcss"),
```

3. Modifique o arquivo `tailwind.config.js`, localizado na raiz do projeto, de forma que fique igual ao exemplo abaixo:
```
module.exports = { 
content: [ 
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
], 
theme: { 
	extend: {}, 
},
    plugins: [], 
}
```

4. Adicione o conteúdo abaixo no arquivo `resources/css/app.css`:
```
@tailwind base; 
@tailwind components; 
@tailwind utilities;
```

### Configurações

1. Adicione o Vue no arquivo `webpack.mix.js`, localizado na raiz do projeto. Certifique-se de que seu arquivo fique semelhando ao exemplo abaixo:
```
mix.js('resources/js/app.js', 'public/js')
.vue()
.postCss('resources/css/app.css', 'public/css', [
	require("tailwindcss")
]);
```

2. Para finalizar, rode o comando abaixo:
```
npm run dev
```

### Obter Arquivos Necessários

1. Clone esse repositório, utilizando o comando abaixo:
```
git clone https://github.com/wagner-m-alves/dashboard.git
```

### Dependências Secundárias

1. Acesse a raiz de seu novo projeto Laravel, no qual deseja implementar o dashboard, utilizando o comando abaixo:
```
cd caminho-do-seu-projeto-laravel
```

2. Instale e atualize as dependências, utilizando os comandos abaixo:
```
npm i pinia @mdi/js chart.js numeral autoprefixer -D
npm install autoprefixer@10.4.5 --save-exact
```

### Configuração do Autoprefixer

1. Adicione, caso não esteja pronto, `require('autoprefixer')` às opções de plug-in PostCSS no arquivo `webpack.mix.js`, presente na raiz de seu projeto Laravel.

### Copia de Arquivos

1. Acesse os arquivos do repositório clonado no passo 1 da subseção `Obter Arquivos Necessários` e copie os diretórios `resources/js` e `resources/css` para o diretório `resources` do seu novo projeto Laravel.

2. Acesse os arquivos do repositório clonado no passo 1 da subseção `Obter Arquivos Necessários` e copie os diretórios `app/Http/Controllers/Auth`, `app/Http/Controllers/Site` e `app/Http/Controllers/Web` para o diretório `app/Http/Controllers` do seu novo projeto Laravel.

3. Acesse os arquivos do repositório clonado no passo 1 da subseção `Obter Arquivos Necessários` e copie o diretório `app/Http/Requests/Auth` para o diretório `app/Http/Requests` do seu novo projeto Laravel.

4. Acesse os arquivos do repositório clonado no passo 1 da subseção `Obter Arquivos Necessários` e copie o arquivo `app/Http/Middleware/HandleInertiaRequests.php` para o diretório `app/Http/Middleware` do seu novo projeto Laravel, de modo a substituir o arquivo existente.

5. Acesse os arquivos do repositório clonado no passo 1 da subseção `Obter Arquivos Necessários` e copie o arquivo `app/routes/auth.php` para o diretório `app/routes` do seu novo projeto Laravel.

6. Acesse os arquivos do repositório clonado no passo 1 da subseção `Obter Arquivos Necessários` e copie o arquivo `app/routes/web.php` para o diretório `app/routes` do seu novo projeto Laravel, de modo a substituir o arquivo existente.
