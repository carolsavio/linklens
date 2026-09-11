# LinkLens

![WIP](https://img.shields.io/badge/status-WIP-orange)
![Cybersecurity](https://img.shields.io/badge/Cybersecurity-Project-blue)
![Phishing Detection](https://img.shields.io/badge/Phishing-Detection-red)
![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-yellow?logo=javascript\&logoColor=black)
![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-4285F4?logo=googlechrome\&logoColor=white)

**LinkLens** é uma extensão para Google Chrome criada para ajudar na identificação de sites potencialmente relacionados a **phishing**.

Diferente de ferramentas que analisam apenas a URL, o LinkLens busca observar também **características públicas do próprio site**, procurando sinais que possam indicar comportamento suspeito.

> ⚠️ **Status:** projeto em desenvolvimento.

---

## Objetivo

O objetivo do LinkLens é fornecer uma análise rápida e acessível sobre possíveis sinais de phishing encontrados durante a navegação.

A extensão considera informações disponíveis publicamente no navegador e na página visitada, buscando identificar padrões suspeitos sem realizar qualquer tentativa de invasão, exploração ou acesso não autorizado.

O LinkLens foi pensado como uma ferramenta de **análise defensiva e conscientização em segurança**.

---

## O que o LinkLens analisa?

A análise pode considerar diferentes tipos de evidências, como:

* características suspeitas na URL;
* uso incomum de subdomínios;
* domínios potencialmente enganosos;
* presença ou ausência de HTTPS;
* formulários presentes na página;
* links externos ou redirecionamentos suspeitos;
* elementos visuais e estruturais da página;
* características comuns encontradas em páginas de phishing;
* outros indicadores públicos disponíveis no site.

Esses indicadores são utilizados como **heurísticas**.

Isso significa que o LinkLens procura sinais que aumentam ou diminuem a probabilidade de um site ser suspeito, em vez de simplesmente declarar que um site é malicioso com base em uma única característica.

---

## URL ≠ Site

Uma das ideias principais do projeto é que analisar apenas uma URL pode não ser suficiente.

Um endereço aparentemente normal pode hospedar uma página maliciosa, enquanto uma URL incomum não significa necessariamente que exista phishing.

Por isso, o LinkLens busca combinar:

```text
URL
 +
Estrutura da página
 +
Elementos públicos
 +
Indicadores de segurança
 +
Heurísticas
 =
Análise de risco
```

---

## Privacidade e ética

O LinkLens foi projetado para realizar apenas **análises passivas e defensivas**.

A extensão não tem como objetivo:

* acessar informações privadas;
* coletar credenciais;
* quebrar autenticações;
* explorar vulnerabilidades;
* realizar invasões;
* contornar mecanismos de segurança;
* acessar dados protegidos ou não públicos.

A análise é limitada a informações e elementos disponibilizados publicamente durante a navegação.

O desenvolvimento do projeto busca respeitar princípios de segurança, privacidade e proteção de dados.

---

## Tecnologias

Atualmente o projeto utiliza:

* **JavaScript**
* **HTML**
* **CSS**
* **Chrome Extensions API**
* **Manifest V3**

Inicialmente o LinkLens está sendo desenvolvido para **Google Chrome**.

Suporte para outros navegadores poderá ser considerado futuramente.

---

## Status do projeto

O LinkLens ainda está em desenvolvimento.

Algumas funcionalidades podem mudar significativamente durante a evolução do projeto.

### Planejado

* [x] Estrutura inicial da extensão
* [x] Interface básica
* [ ] Análise heurística de URLs
* [ ] Análise de elementos da página
* [ ] Sistema de pontuação de risco
* [ ] Explicação dos indicadores encontrados
* [ ] Classificação visual de risco
* [ ] Testes com páginas legítimas e páginas simuladas de phishing
* [ ] Redução de falsos positivos
* [ ] Documentação das heurísticas utilizadas

---

## Limitações

O LinkLens **não substitui soluções profissionais de segurança**.

Uma página classificada como suspeita não necessariamente é maliciosa, assim como uma página considerada segura não possui garantia absoluta de legitimidade.

O resultado deve ser interpretado como um **indicador de risco**, baseado nas evidências encontradas durante a análise.

---

## Filosofia do projeto

O LinkLens busca seguir alguns princípios:

**Transparência**
Sempre que possível, explicar por que determinado comportamento foi considerado suspeito.

**Privacidade**
Analisar apenas informações necessárias e disponíveis publicamente.

**Defesa**
O projeto é voltado para detecção, conscientização e análise de ameaças.

**Redução de falsos positivos**
Nenhum indicador isolado deve determinar automaticamente que um site é phishing.

**Aprendizado**
Além de detectar riscos, o projeto pretende ajudar usuários a entender quais características tornam uma página potencialmente suspeita.

---

## Aviso

Este projeto possui finalidade **educacional e defensiva em cybersecurity**.

Nenhum mecanismo do LinkLens deve ser utilizado para invasão, coleta indevida de informações, exploração de vulnerabilidades ou qualquer atividade que viole leis, termos de serviço ou direitos de terceiros.

---

### LinkLens

**Look closer before you trust the link. 🔎**
