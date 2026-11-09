const carros = [
    {
        modelo: "Volkswagen Polo",
        versao: "Highline 1.0 TSI",
        ano: 2024,
        preco: 115000.00
    },
    {
        modelo: "Chevrolet Onix",
        versao: "Premier Turbo",
        ano: 2024,
        preco: 105000.00
    },
    {
        modelo: "Fiat Pulse",
        versao: "Audace Turbo 200",
        ano: 2023,
        preco: 98000.00
    },
    {
        modelo: "Toyota Corolla",
        versao: "Altis Hybrid",
        ano: 2024,
        preco: 185000.00
    },
    {
        modelo: "Hyundai Creta",
        versao: "Limited Safety",
        ano: 2024,
        preco: 135000.00
    }
];

const corpoTabela = document.getElementById("corpoTabela");

for (let carro of carros) {
    const linha = document.createElement("tr");

    linha.innerHTML = `
        <td>${carro.modelo}</td>
        <td>${carro.versao}</td>
        <td>${carro.ano}</td>
        <td class="preco">${carro.preco.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })}</td>
    `;

    corpoTabela.appendChild(linha);
}