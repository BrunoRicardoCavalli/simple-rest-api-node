const apiUrl = 'http://localhost:3000/pessoas';
const form = document.getElementById('pessoaForm');
const mensagem = document.getElementById('mensagem');
const lista = document.getElementById('listaPessoas');
const cpfInput = document.getElementById('cpf');
const idInput = document.getElementById('idPessoa');

/* Máscara CPF */
cpfInput.addEventListener('input', () => {
    let cpf = cpfInput.value.replace(/\D/g, '');
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    cpfInput.value = cpf;
});

/* Carregar pessoas */
async function carregarPessoas() {
    const res = await fetch(apiUrl);
    const pessoas = await res.json();

    lista.innerHTML = '';
    pessoas.forEach(p => {
        lista.innerHTML += `
            <tr>
                <td>${p.nome}</td>
                <td>${p.cpf}</td>
                <td class="actions">
                    <button onclick="editar(${p.id}, '${p.nome}', '${p.cpf}')">✏️</button>
                    <button onclick="excluir(${p.id})">🗑️</button>
                </td>
            </tr>
        `;
    });
}

/* Criar / Atualizar */
form.addEventListener('submit', async e => {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const cpf = cpfInput.value;
    const id = idInput.value;

    const method = id ? 'PUT' : 'POST';
    const url = id ? `${apiUrl}/${id}` : apiUrl;

    const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, cpf })
    });

    if (res.ok) {
        mensagem.textContent = 'Operação realizada com sucesso';
        mensagem.style.color = 'green';
        form.reset();
        idInput.value = '';
        carregarPessoas();
    } else {
        mensagem.textContent = 'Erro na operação';
        mensagem.style.color = 'red';
    }
});

/* Editar */
function editar(id, nome, cpf) {
    idInput.value = id;
    document.getElementById('nome').value = nome;
    cpfInput.value = cpf;
}

/* Excluir */
async function excluir(id) {
    if (!confirm('Deseja excluir esta pessoa?')) return;

    await fetch(`${apiUrl}/${id}`, { method: 'DELETE' });
    carregarPessoas();
}

carregarPessoas();
