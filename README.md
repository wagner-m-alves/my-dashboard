## Dashboard

Esse projeto nasceu da necessidade de um kit inicial, simples e fácil de personalizar. O projeto Dashboard é um kit inicial para laravel, construido com Vue.JS 3, Inertia JS e Tailwind CSS 3. O design do dashboard (area autenticada) foi inspirado no [Admin One Dashboard](https://github.com/justboil/admin-one-vue-tailwind), utilizando-se de alguns de seus componentes modificados, a saber: Chart e CardWidget. Utilizou-se também código referente à funcionalidade de Modo Claro e Escuro.

## Tecnologias Primarias

- [Vue.JS 3.x](https://vuejsbr-docs-next.netlify.app/)
- [Inertia JS](https://inertiajs.com/)
- [Tailwind CSS 3.x](https://tailwindcss.com/docs/guides/laravel)
- [Pinia](https://pinia.vuejs.org/introduction.html)
- [Font Awesome](https://fontawesome.com/search?s=solid%2Cbrands)
- [Vuelidate](https://vuelidate.js.org/)

## Mais Detalhes

Esse repositório tem como objetivo compartilhar o conhecimento, pois nada melhor que pegar algo e fazer manualmente, acompanhando cada etapa do processo, adquirindo um conhecimento solido. Com base nesse objetivo será apresentado o passo a passo de como fazer essa implementação manualmente. Para o dia a dia, foi desenvolvido um [Pacote laravel](https://github.com/wagner-m-alves) que pode ser instalado com o Composer.

## Implementação Manual

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

2. Crie o arquivo `app.js` no diretório `resources/js` do seu novo projeto Laravel e adicione o conteúdo abaixo:
```
import './bootstrap';

import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import { createPinia } from 'pinia'
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';

const pinia = createPinia()

createInertiaApp({
  resolve: name => require(`./Pages/${name}`),
  setup({ el, app, props, plugin }) {
    createApp({ render: () => h(app, props) })
      .use(plugin)
      .use(pinia)
      .use(ZiggyVue, Ziggy)
      .mount(el)
  },
})
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

### Instalar Pinia
1. Instale o Pinia, utilizando o comando abaixo:
```
npm install pinia
```

2. Adicione o Pinia como plugin no arquivo `app.js`, presente no diretório `resources/js` de seu novo projeto laravel.
```
...
import { createPinia } from 'pinia'

const pinia = createPinia()

createInertiaApp({
  resolve: name => require(`./Pages/${name}`),
  setup({ el, app, props, plugin }) {
    createApp({ render: () => h(app, props) })
      .use(plugin)
      .use(pinia)
      .use(ZiggyVue, Ziggy)
      .mount(el)
  },
})
...
```

### Instalar Font Awesome
1. Instale os seguintes pacote, utilizando os comandos abaixo:
```
npm i --save @fortawesome/fontawesome-svg-core
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/free-brands-svg-icons
npm i --save @fortawesome/vue-fontawesome@prerelease
```

2. Crie um arquivo com o nome `fontawesome-icons.js` em `resources/js`

3. Insira o conteúdo abaixo no arquivo criado
```
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, far, fab)
dom.watch();
```

4. Acrescente a linha abaixo ao arquivo `app.js`, presente no diretório `resources/js`:
```
import ‘./fontawesome-icons’;
```

### Instalar Vuelidate
1. Instale o Vuelidate, utilizando o comando abaixo:
```
npm install @vuelidate/core @vuelidate/validators
```

### Instalar Tailwind CSS 3.x

1. Instale o Tailwind CSS, utilizando o comando abaixo:
```
npm install -D tailwindcss postcss
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
npm i pinia chart.js numeral autoprefixer -D
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
