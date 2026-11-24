# Clínica Médica Vida & Saúde

Protótipo front-end institucional criado a partir do estudo de caso da atividade de Desenvolvimento Front-End. O site organiza as informações que hoje dificultam o contato dos pacientes com a clínica: serviços, especialidades, profissionais, horários, endereço e solicitação de atendimento.

## Abrir o protótipo

Abra `index.html` em um navegador. O site usa HTML, CSS e JavaScript sem etapa de compilação ou dependências de instalação. A tipografia pode usar fontes do Google Fonts quando há conexão; o sistema mantém fontes alternativas locais.

## O que foi proposto

- **Página inicial e apresentação institucional:** resumo do atendimento, missão, endereço e horário geral da clínica.
- **Especialidades:** lista visual de Cardiologia, Dermatologia, Pediatria, Ortopedia, Clínica Geral, Ginecologia e Oftalmologia, com acesso ao formulário.
- **Profissionais e horários:** tabela responsiva com os três profissionais fictícios e seus dias e períodos de atendimento, conforme os exemplos da atividade.
- **Contato e solicitação:** formulário com nome, e-mail, telefone, especialidade, data desejada e mensagem. A validação é feita no navegador e a tela informa claramente que este protótipo não transmite nem armazena os dados.
- **Imagem:** ilustração SVG local contextualizada com atendimento em clínica, com texto alternativo.
- **Navegação:** links internos entre as seções, navegação responsiva e atalho para pular ao conteúdo.

Todos os nomes, horários, endereço, telefone e e-mail são dados fictícios para fins acadêmicos. O endereço e os canais não representam um estabelecimento real.

## Relatório técnico resumido

### Problema e necessidades

A clínica fictícia não tem um site institucional e os pacientes têm dificuldade para encontrar informações básicas, como serviços disponíveis, profissionais, horários, localização e formas de contato. A ausência de um canal organizado também torna mais difícil pedir orientação ou manifestar interesse em um atendimento.

### Solução e organização

O protótipo reúne a apresentação da clínica, suas especialidades, o corpo clínico e os respectivos horários em uma página única, com navegação por âncoras. O formulário oferece um caminho claro para iniciar uma solicitação. Isso melhora a localização das informações e a comunicação inicial, sem afirmar que há integração com uma agenda ou serviço de atendimento real.

### Recursos de Front-End utilizados

- **HTML:** documento semântico com `header`, `nav`, `main`, `section`, `article`, `table`, `form` e `footer`; títulos, parágrafos e metadados estruturam e identificam o conteúdo.
- **`div` e organização:** contêineres agrupam áreas de layout, cartões, linhas de formulário e informações relacionadas.
- **CSS e fontes:** cores, tipografia, hierarquia visual, espaçamento, bordas, estados de foco e regras responsivas organizam a interface.
- **Flexbox:** navegação, cabeçalho, grupos de informações, cartões institucionais, linhas de tabela e rodapé se adaptam ao espaço disponível.
- **Links:** navegação por seções, chamadas para solicitar atendimento, links de telefone e e-mail.
- **Imagens:** a ilustração SVG local apresenta o contexto de cuidado e inclui texto alternativo.
- **Listas:** listas não ordenadas organizam as formas de contato e os elementos de informação relacionados.
- **Tabela:** `thead`, cabeçalhos associados às colunas, `tbody` e linhas mostram em conjunto o profissional, sua especialidade, dias e horários; essa relação é tabular e facilita a comparação. Em telas pequenas, a tabela pode ser rolada horizontalmente.
- **Formulário:** campos com rótulos, tipos apropriados, validação do navegador e confirmação visual demonstram o fluxo de solicitação. O envio é apenas simulado, pois o projeto não tem servidor ou integração de agenda.
- **Frameset/Frame:** `frameset` e `frame` pertencem a um modelo antigo de composição de páginas e não são usados na interface final. As seções semânticas e a navegação por âncoras oferecem organização e acesso direto no mesmo documento, com melhor adaptação a celulares e tecnologias assistivas. Em um cenário didático, um frame poderia exibir uma página independente, por exemplo um mapa ou portal; neste protótipo isso não é necessário.

### Protótipo e conclusão

A interface tem cabeçalho com marca e menu, chamada principal ilustrada, resumo institucional, cartões de especialidades, tabela do corpo clínico, formulário de contato e rodapé. Essa composição permite visualizar o caminho do paciente antes de conectar serviços reais. Ao concentrar informações claras e um ponto de contato, a proposta pode reduzir dúvidas e facilitar a comunicação entre pacientes e clínica.

## Próximos passos para uso real

Conectar o formulário a um canal e a um serviço de agendamento aprovados pela clínica, substituir os dados fictícios por informações autorizadas, revisar os textos e publicar em hospedagem adequada.

