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

//typosquatting -> no console esta funcionando por enquanto
function levenshtein (a, b) {
    const custo = [];

    for (let i = 0; i<= a.length; i++) custo [i] = [i];
    for (let j = 1; j <= b.length; j++) custo[0][j] = j;

    for (let i = 1; i<= a.length; i++) {
        for (let j = 1; j <= b.length; j++) {
            if (a[i - 1] === b[j - 1]) {
                custo [i][j] = custo [i -1][j - 1];
            } else {
                custo[i][j] = Math.min(
                    custo[i - 1][j] + 1,
                    custo[i][j - 1] + 1,
                    custo[i - 1][j - 1] + 1
                );
            }
        }
    }

    return custo[a.length][b.length];
}
