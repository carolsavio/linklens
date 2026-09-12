function analisarUrl(url) {
    let score = 0;
    const motivos = [];
    const host = new URL(url).hostname;

    // Heurística 1 -> O domínio é um IP em vez de um nome? ReGex
    if (/^\d{1,3}(\.\d{1,3}){3}$/.test(host)) {
        score += 30;
        motivos.push("Domínio é um endereço IP");
    }

    // o dominio tem muitos hífens?
    if ((host.match(/-/g) || [].length > 2)){
        score += 15;
        motivos.push("Domínio com muitos hífens");
    }

    // usa https?
    if (!url.startsWith("https://")) {
        score += 20;
        motivos.push("Conexão não é HTTPS");
    }

    return {
        score,
        motivos
    };

}

