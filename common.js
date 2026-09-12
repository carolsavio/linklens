function analisarUrl(url) {
    let score = 0;
    const motivos = [];
    const host = new URL(url).hostname;
}

// Heurística 1 -> O domínio é um IP em vez de um nome? ReGex
if ("regex do ipv4") {
    score += 30;
    motivos.push("Domínio é um endereço IP");
}